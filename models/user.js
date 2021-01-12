const mongoose = require("mongoose");
const { Schema } = mongoose;
var mongoosePaginate = require('mongoose-paginate-v2');

const UserSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    full_name: String,
    address: String,
    phone_number: String,
    show: {
      type: Boolean,
      default: true
    },
    status: {
        type: String,
        default: "Pending"
    }
});
UserSchema.plugin(mongoosePaginate);

module.exports = mongoose.model("User", UserSchema);

