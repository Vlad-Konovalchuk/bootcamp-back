require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const colors = require("colors");
const PORT = process.env.PORT || 4000;
const bootcamps = require("./bootcamp");
const connectionDB = require("./config/db");
const errorHandler = require("./middleware/errorHandler");
const app = express();

//Connect to DB
connectionDB();

// Body Parser
app.use(express.json());

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}
app.use("/api/v1/bootcamp", bootcamps);

app.use(errorHandler);

const server = app.listen(PORT, () =>
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
);

process.on("unhandledRejection", err => {
  console.error(`Error: ${err.message}`);
  server.close(() => process.exit(1));
});
