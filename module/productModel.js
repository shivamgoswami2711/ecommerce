const mongoose = require("mongoose");

const product = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "please enter product title"]
    },
    price: {
        type: Number,
        required: [true, "please enter product price"],
        max: [100000, "max price 100000"],
        min: [50, "min price 50"]
    },
    discription: {
        type:String,
        required: [true, "please enter product discription"],
    },
    images:[{
        public_id:{
            type:String,
            required:true
        },
        url:{
            type:String,
            required:true
        }
    }],
    reviews:{
        ur_id:{
            type:String,
            required:true
        },
        rating:{
            type:Number,
        }
    }
})

module.exports = mongoose.model('product',product);