const bcrypt = require("bcryptjs");
const mongoose = require("mongoose");
const JWT = require("jsonwebtoken");
const { use } = require("express/lib/application");

const userSachema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "please enter name"]
    },
    email: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: 'Email address is required',
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    password: {
        type: String,
        required: [true, "please enter password"]
    },
    image: {
        public_id: {
            type: String,
            required: true,
        },
        url: {
            type: String,
            required: true
        }
    },
    resetPassTokan: String,
    resetPassExport: String
})

userSachema.pre("save", async function () {

    // 
    if (!this.isModified("password")) next();

    this.password = await bcrypt.hash(this.password, 10)
})


userSachema.methods.findSimilarTypes = function() {
    return "hello"
  };

userSachema.methods.getJWTToken = function () {
    return JWT.sign(this._id, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRE })
}

userSachema.methods.comperePassword = async function(InPass) {
    return  JWT.compare(InPass, this.password);
}

module.exports = mongoose.model("user", userSachema);








// woh maja bhi kya tha tere sath chai pine ka 
// woh teri khati mithi bate sun jine ka 
// kab najar lag gai is payar ko
// ab maja le rahe hai tere bina jine ka 
