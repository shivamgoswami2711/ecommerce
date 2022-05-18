const catchasyncerror = require("../middleware/catchasyncerror");
const Product = require("../module/productModel");
const ErrorHeandler = require("../utils/ErrorHeandler");

exports.createProduct = catchasyncerror(async (req, res, next) => {
    const Product = await Product.create(req.body);
    res.status(201).json({
        success: true,
        data: Product
    });
});

exports.getAllProduct = catchasyncerror(async (req, res, next) => {
    const allProduct = await new ApiFeature(Product.find(),req.query).search(req.query.keyword).filter();
    res.status(200).json({
        success: true,
        data: allProduct,
    })
})

exports.getProduct = catchasyncerror(async (req, res, next) => {
    const oneProduct = await Product.findById(req.params.id);
    if (!oneProduct) next(new ErrorHeandler(404,'Product not find')); 
    const Product = await Product.findById(req.params.id);
    res.status(200).json({
        success: true,
        data: Product
    })
})

exports.updateProduct = catchasyncerror(async (req, res, next) => {
    const Product = await Product.findById(req.params.id);
    if (!Product)next(new ErrorHeandler(404,'Product not find'));


    const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true ,runValidators:true,useFindAndModify: false});
    res.status(200).json({
        success:true,
        data:updatedProduct
    })
})


exports.deleteProduct = catchasyncerror(async (req, res, next) => {
    const Product = await Product.findById(req.params.id);
    if (!Product)next(new ErrorHeandler(404,'Product not find'));


    const updatedProduct = await Product.deleteById(req.params.id)
    res.status(200).json({
        success:true,
        data:updatedProduct
    })
})