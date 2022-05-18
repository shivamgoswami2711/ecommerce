const ProductRoute = require("./routes/productRoute");
const UserRoute = require("./routes/UserRoute");
const error = require("./middleware/error");
const { json } = require("express/lib/response");
const express = require("express");
const app = require("express")();


// json con
app.use(express.json())

// route
app.use("/api/product", ProductRoute)
app.use("/api/user", UserRoute)
app.use("/api/user", UserRoute)


app.use(error)
// export app
module.exports = app;