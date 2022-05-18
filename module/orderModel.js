const mongoose = require("mongoose");

const orderModel = new mongoose.Schema({
    user_id: {
        type: String,
        require: [true, "user_id is null"]
    },
    product_id: {
        type: String,
        require: [true, "product_id is null"]
    },
    ordreTime: {
        type: String,
        require: [true, "product_id is null"]
    },
    quantity:{
        type:Number,
        default:1,
    },
    status: {
        type: String,
        default:"order placed"
    },
    deliveryTime: {
        type: String,
    }
})

module.exports = mongoose.model("order", orderModel);