const express = require("express");
const { PORT } = require("./config/config");

const app = express();

app.listen(PORT, console.log(`Run server on Port:${PORT}`));
