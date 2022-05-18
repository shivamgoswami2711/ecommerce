const express = require("express");
const { createProduct, getAllProduct, getProduct, updateProduct, deleteProduct } = require("../controller/productControl");

const ProductRoute = express.Router();

ProductRoute.route("/new").post(createProduct);
ProductRoute.route("/").get(getAllProduct);
ProductRoute.route("/:id").get(getProduct).put(updateProduct).delete(deleteProduct);


module.exports = ProductRoute; 