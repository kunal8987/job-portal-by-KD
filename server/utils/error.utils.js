export const sendErrorResponse = (res, statusCode, message, error = {}) => {
    return res.status(statusCode).json({
        success: false,
        message,
        error,
    });
};
