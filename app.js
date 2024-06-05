const express = require("express");
const { PORT } = require("./config/config");

const app = express();
require("./config/database")();

app.listen(PORT, console.log(`Run server on Port:${PORT}`));
