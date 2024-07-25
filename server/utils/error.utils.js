// This function sends an error response to the client with a specified status code, message, and error details.
export const sendErrorResponse = (res, statusCode, message, error = {}) => {
    // Set the HTTP status code and send a JSON response with error details.
    res.status(statusCode).json({
        success: false, // Indicates that the request was not successful.
        message, // The error message to be displayed to the user.
        error, // Optional error details for debugging purposes.
    });
};
