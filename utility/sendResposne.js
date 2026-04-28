export const sendResponse = (req, statusCode, message, data = null) => {
    return res.status(statusCode).json({
        message,
        ...(data & { data }),
    });
};