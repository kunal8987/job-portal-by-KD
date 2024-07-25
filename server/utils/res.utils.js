// This function sends a success response to the client with a specified message and data.
export const sendSuccessResponse = (res, message, data = {}) => {
    // Set the HTTP status code to 200 (OK) and send a JSON response with success, message, and data.
    res.status(200).json({
        success: true, // Indicates that the request was successful.
        message, // The message to be displayed to the user.
        data, // The data to be sent back to the client.
    });
};
