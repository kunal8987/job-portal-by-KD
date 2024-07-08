export const sendSuccessResponse = (res, message, data = {}) => {
    return res.status(200).json({
        success: true,
        message,
        data,
    });
};
