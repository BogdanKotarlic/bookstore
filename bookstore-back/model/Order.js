const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    amount: {
        type: Number
    },
    price: {
        type: Number
    }
})

module.exports = mongoose.model("Order", orderSchema);