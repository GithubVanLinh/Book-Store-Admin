const mongoose = require("mongoose");
const { Schema } = mongoose;

const CommentSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true
  },
  show: {
    type: Boolean,
    default: true
  }
});

module.exports = mongoose.model("Comment", CommentSchema);
