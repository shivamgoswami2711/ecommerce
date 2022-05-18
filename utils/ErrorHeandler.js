class ErrorHeandler extends Error {
    constructor(StatusCode, message) {
        super(message);
        this.StatusCode = StatusCode;
        Error.captureStackTrace(this, StatusCode);
    }
}

module.exports = ErrorHeandler;