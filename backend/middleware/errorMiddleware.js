// Define the error handler function that takes four parameters: err, req, res, and next.
const errorHandler = (err, req, res, next) => {
  // Determine the HTTP status code to be sent in the error response. If the response already has a status code, use it; otherwise, default to 500 (Internal Server Error).
  const statusCode = res.statusCode ? res.statusCode : 500;
  // Set the HTTP status code for the response.
  res.status(statusCode);

  // Create a JSON response object that includes the error message and stack trace (only in non-production environments).
  res.json({
    message: err.message, // Include the error message in the response.
    stack: process.env.NODE_ENV === "production" ? null : err.stack, // Include the stack trace in the response, but only in non-production environments. In production, stack traces are typically not shown to users for security reasons.
  });
};

// Export the error handler function so that it can be used in other parts of the application.
module.exports = {
  errorHandler,
};
