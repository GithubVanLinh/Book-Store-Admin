const mongoose = require("mongoose");
const Book = require("./book");
const User = require("./user");
const { Schema } = mongoose;

const BillSchema = new Schema({
  id: String,
  book: {
    type: mongoose.Types.ObjectId,
    ref: Book
  },
  amount: Number,
  total_price: Number,
  status: Number,
  booking_date: {
    type: Date,
    default: Date.now()
  },
  update_date: Date,
  user: {
    type: mongoose.Types.ObjectId,
    ref: User
  },
  show: {
    type: Boolean,
    default: true
  }
});
//status 1: Dang giao
//status 2: Da giao
//status 0: Da huy
module.exports = mongoose.model("Bill", BillSchema);
