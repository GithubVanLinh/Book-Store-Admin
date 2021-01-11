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
    salt: String,
    isBlocked: {
        type: Boolean,
        default: false
    },
    show: {
      type: Boolean,
      default: true
    }
});

UserSchema.plugin(mongoosePaginate);

module.exports = mongoose.model("User", UserSchema);
