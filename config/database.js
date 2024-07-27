const mongoose = require("mongoose");

module.exports = async () => {
  try {
    mongoose.connect(process.env.DB_URL, {});
    console.log("Run Database...");
  } catch (error) {
    console.error(error);
    console.log("Can't Run Database...");
  }
};
