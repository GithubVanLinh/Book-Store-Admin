const mongoose = require("mongoose");
const { Schema } = mongoose;

const AdminSchema = new Schema({
    email: {
        type: String,
        required: true,
        lowercase: true
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

module.exports = mongoose.model("Admin", AdminSchema);
