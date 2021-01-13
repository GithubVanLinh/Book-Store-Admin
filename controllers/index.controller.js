const Category = require("../services/category.service");
const UserService = require("../services/user.service");
const BillService = require("../services/bill.service");

function daysInMonth(month, year) {
  return new Date(year, month, 0).getDate();
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
  getHomePage: async (req, res, next) => {
    const countUser = await UserService.getNumberOfUser();
    const countPendingBill = await BillService.getCountBillPending();
    const date =new Date(Date.now());

    const startDateString = `${date.getFullYear()}-${date.getMonth()+1}-01`;
    const endDateString = `${date.getFullYear()}-${date.getMonth()+1}-${daysInMonth(
      date.getMonth(),
      date.getFullYear()
    )}`;
    console.log(startDateString, endDateString);
    const chartData = await BillService.getBillsByTwoDate(
      startDateString,
      endDateString
    );
    outchartData = getBooksRevenue(chartData);

    const barChartData = JSON.stringify(outchartData);

    var total = 0;
    for (item of outchartData){
      total+=item.price;
    }
    console.log(total);
    res.render("index", { countUser, countPendingBill , barChartData, total, month: date.getMonth()+1});
  },
};
