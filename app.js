const express = require("express");
const { PORT } = require("./config/config");
const routes = require("./routes");

const app = express();

require("./config/database")();
require("./config/express")(app);

app.use("/api", routes);

app.listen(PORT, console.log(`Run server on Port:${PORT}`));
