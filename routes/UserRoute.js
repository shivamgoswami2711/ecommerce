const express = require("express");
const { Ragistretion, Login, UserUpdate, getUser } = require("../controller/userControl")
const UserRoute = express.Router();

UserRoute.route("/ragistretion").post(Ragistretion);
UserRoute.route("/login").post(Login);
UserRoute.route("/:id").get(getUser).put(UserUpdate);


module.exports = UserRoute;