require("dotenv").config();
const express = require("express");
const routes = require("./routes");

const app = express();

require("./config/database")();
require("./config/express")(app);

app.use("/api", routes);

app.listen(
  process.env.PORT,
  console.log(`Run server on Port:${process.env.PORT}`)
);
