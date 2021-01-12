const Bill = require("../models/bill");
const LIMIT = 10;
const mongoose = require("mongoose");

module.exports = {
  getAllBill: async (page) => {
    const options = {
      page: page,
      limit: LIMIT,
      sort: { update_date: -1 },
      populate: {
        path: "userId",
        select: "email",
      },
    };
    console.log("pre", options);
    let bills;
    await Bill.paginate({ show: true }, options).then(function (result) {
      console.log("result", result);
      bills = result;
    });
    return bills;
  },
  getBillByIdJSON: async (id) => {
    const newId = mongoose.Types.ObjectId(id);
    const bill = await Bill.findOne({ _id: newId })
      .populate({
        path: "userId",
        select: ["email", "full_name"],
      })
      .populate({
        path: "books",
        populate: {
            path: "bookId",
            select: "name"
        }
      })
      .exec();
    console.log(bill);
    return bill;
  },
  updateBillStatusById:async (id, status)=>{
    
    return await Bill.findOneAndUpdate({_id: id}, {status: status});
  }
};
