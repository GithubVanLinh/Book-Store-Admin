const { response } = require("express");
const book = require("../models/book");
const { getBillsByTwoDate } = require("../services/bill.service");
const BillService = require("../services/bill.service");

function daysInMonth(month, year) {
  return new Date(year, month, 0).getDate();
}

function stringToDateStringFormat(strDate) {
  const date = new Date(strDate);
  return date.getDate() + "/" + date.getMonth() + 1 + "/" + date.getFullYear();
}

function getBookRevenue(list) {
  const books = [];
  for (item of list) {
    const book = {};
    if (item.bookId) {
      book.price = item.bookId.price * item.amount;
      book.name = item.bookId.name;
      books.push(book);
    }
  }
  return books;
}

function getBooksRevenue(list) {
  console.log("list", list);
  const books = [];
  for (item of list) {
    const book = getBookRevenue(item.books);
    for (j of book) {
      console.log("j", j);
      var isIn = false;
      for (x of books) {
        if (j.name == x.name) {
          x.price += j.price;
          isIn = true;
          break;
        }
      }
      if (!isIn) {
        books.push(j);
      }
    }
  }
  console.log(books);
  return books;
}
module.exports = {
  getAllBill: async (req, res, next) => {
    const page = req.query.page || 1;

    const bills = await BillService.getAllBill(page);
    bills.bills = bills.docs;
    for (bill of bills.bills) {
      console.log("bill", bill);
      bill.booking_date_vn = stringToDateStringFormat(bill.booking_date);
    }

    delete bills.docs;
    console.log(bills);
    res.render("bill_list", bills);
  },
  getBillByIdJSON: async (req, res, next) => {
    const id = req.params.id || req.body.id || req.query.id;
    const bill = await BillService.getBillByIdJSON(id);
    res.json(bill);
  },
  updateBillStatusById: async (req, res, next) => {
    const id = req.params.id || req.body.id || req.query.id;
    const bill = await BillService.updateBillStatusById(id, "Done");
    res.json({ success: true });
  },
  getRevenue: async (req, res, next) => {
    const year = req.query.year || req.body.year;
    const month = req.query.month || req.body.month;
    const day = req.query.day || req.body.day;
    const quarter = req.query.quarter || req.body.quarter;
    const page = +req.query.page || 1;
    const startDate = req.query.startDate || req.body.startDate;
    const endDate = req.query.endDate || req.body.endDate;

    let bills;
    let outchartData;
    if (quarter && year) {
      let startDateString;
      let endDateString;
      switch (true) {
        case quarter == "1":
          startDateString = `${year}-1-1`;
          endDateString = `${year}-3-31`;
          break;

        case quarter == "2":
          startDateString = `${year}-4-1`;
          endDateString = `${year}-6-30`;
          break;

        case quarter == "3":
          startDateString = `${year}-7-1`;
          endDateString = `${year}-9-30`;
          break;

        case quarter == "4":
          startDateString = `${year}-10-1`;
          endDateString = `${year}-12-31`;
          break;
        default:
          break;
      }
      bills = await BillService.getBillsByTwoDate(
        startDateString,
        endDateString,
        page
      );
      const chartData = await BillService.getBillsByTwoDate(
        startDateString,
        endDateString
      );
      outchartData = getBooksRevenue(chartData);
    } else if (day) {
      const startDateString = day;
      console.log(startDateString);
      bills = await BillService.getBillsByTwoDate(
        startDateString,
        startDateString,
        page
      );
      const chartData = await BillService.getBillsByTwoDate(
        startDateString,
        startDateString
      );
      outchartData = getBooksRevenue(chartData);
    } else if (month) {
      const date = new Date(month);
      const startDateString = `${month}-01`;
      const endDateString = `${month}-${daysInMonth(
        date.getMonth(),
        date.getFullYear()
      )}`;
      console.log(startDateString, endDateString);
      bills = await BillService.getBillsByTwoDate(
        startDateString,
        endDateString,
        page
      );
      const chartData = await BillService.getBillsByTwoDate(
        startDateString,
        endDateString
      );
      outchartData = getBooksRevenue(chartData);
    } else if (year) {
      const startDateString = `${year}-01-01`;
      const endDateString = `${year}-12-31`;
      console.log(startDateString, endDateString);
      bills = await BillService.getBillsByTwoDate(
        startDateString,
        endDateString,
        page
      );
      const chartData = await BillService.getBillsByTwoDate(
        startDateString,
        endDateString
      );
      outchartData = getBooksRevenue(chartData);
    } else if ((startDate, endDate)) {
      bills = await BillService.getBillsByTwoDate(startDate, endDate, page);
      const chartData = await BillService.getBillsByTwoDate(startDate, endDate);
      outchartData = getBooksRevenue(chartData);
    } else {
      return res.render("revenue");
    }

    // console.log('chartData', outchartData);

    var total = 0;
    for (item of outchartData){
      total+=item.price;
    }
    console.log(total);

    bills.bills = bills.docs;
    bills.chartData = JSON.stringify(outchartData);
    console.log("chartData", bills.chartData);
    for (bill of bills.bills) {
      //   console.log("bill", bill);
      bill.booking_date_vn = stringToDateStringFormat(bill.booking_date);
    }

    delete bills.docs;
    bills.total = total;
    return res.render("statistic_revenue", bills);
  },
};
