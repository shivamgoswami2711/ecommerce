const catchasyncerror = require("../middleware/catchasyncerror");
const userModel = require("../module/userModel");
const ErrorHeandler = require("../utils/ErrorHeandler")


// new user create
exports.Ragistretion = catchasyncerror(async (req, res, next) => {

    console.log(userModel.findSimilarTypes())
    // // create new user
    // const user = await userModel.create(req.body);

    // // get token 
    // const token = userModel.getJWTToken();

    // sending response
    res.status(201).json({
        success: true,
        token
    })
})


// login user 
exports.Login = catchasyncerror(async (req, res, next) => {
    const { email, password } = req.body


    // if email and password is empty 
    if (!email || !password) next(new ErrorHeandler(400, "please enter vaild email and password"))

    // finding the user 
    const user = await userModel.findOne({ email }).select("password");
    if (!user) next(new ErrorHeandler(404, "user not found"));
    console.log(user)
    // match password
    const isPasswordMatch = await userModel.comperePassword(password);
    // password is wrong
    if (!isPasswordMatch) next(new ErrorHeandler(400, "please enter vaild email and password"))

    // get token 
    const token = userModel.getJWTToken();

    // sending response
    res.status(201).json({
        success: true,
        token
    })
})


// get user data 
exports.getUser = catchasyncerror(async (req, res, next) => {
    const user = await userModel.findById(req.params.id);
    if (!user) next(new ErrorHeandler(404, "user not found"));

    // sending response
    res.status(200).json({
        success: true,
        data: user
    })
})

// update user
exports.UserUpdate = catchasyncerror(async (req, res, next) => {

    // find user
    const user = await userModel.findById(req.params.id);
    if (!user) next(new ErrorHeandler(404, "user not found"));


    // find and update
    const updatedUser = await userModel.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true, useFindAndModify: false });
    // sending response 
    res.status(200).json({
        success: true,
        data: updatedUser
    })
})





























// me kabhi tere pass nahi tha
// pr tere aas pass hi tha
// har khatra jise me pahle hi agha kar deta tha
// teri cear karna achha lagta tha
// teri har dalti ko bas bhul kar maf kar diya karta tha
// phir bhi kar diye tune is dil ke hajaro tukde 

