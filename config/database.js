const mongoose = require("mongoose");
const {} = require('./config')

module.exports = async () => {
  try {
    mongoose.connect();
    console.log("Run Database...");
  } catch (error) {
    console.error(error);
    console.log("Can't Run Database...");
  }
};
