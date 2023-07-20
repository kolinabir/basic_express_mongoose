const express = require("express");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 5000;
const colors = require("colors");
// error handler
const { errorHandler } = require("./middleware/errorMiddleware");
const connectDB = require("./config/db");
connectDB();
const app = express();

// for using clg(res.body) on setGoals function
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/goals", require("./routes/goalRoutes"));

app.use(errorHandler);

app.listen(port, () => {
  console.log("Server started on port " + port);
});
