const mongoose = require("mongoose");
const { Schema } = mongoose;
var mongoosePaginate = require('mongoose-paginate-v2');

const CategorySchema = new Schema({
  id: String,
  name: String,
  description: String,
  show: {
    type: Boolean,
    default: true
  }
});

CategorySchema.plugin(mongoosePaginate);

module.exports = mongoose.model("Category", CategorySchema);
