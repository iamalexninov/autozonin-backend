const mongoose = require("mongoose");
const { DB_URL } = require("./config");

module.exports = async () => {
  try {
    mongoose.connect(DB_URL, {});
    console.log("Run Database...");
  } catch (error) {
    console.error(error);
    console.log("Can't Run Database...");
  }
};
