
export const sendErrorResponse = (res, statusCode, message, error = {}) => {
    res.status(statusCode).json({
        success: false,
        message,
        error
    });
};
