module.exports = (err, req, res, next) => {
    err.StatusCode = err.StatusCode || 500;
    err.StatusCode = err.message || "internal servar error";

    res.status(err.StatusCode).json({
        success:false,
        message:err.message
    })
}