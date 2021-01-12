const mongoose = require("mongoose");
const { Schema } = mongoose;
var mongoosePaginate = require("mongoose-paginate-v2");
const Book = require('./book');

const UserSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  full_name: String,
  address: String,
  phone_number: String,
  show: {
    type: Boolean,
    default: true,
  },
  status: {
    type: String,
    default: "Pending",
  },
  cart: {
    books: [
      {
        bookId: {
          type: mongoose.Types.ObjectId,
          ref: Book,
        },
        count: Number,
      },
    ],
    total_price: {
      type: Number,
      default: 0,
    },
  },
});
UserSchema.plugin(mongoosePaginate);

module.exports = mongoose.model("User", UserSchema);
