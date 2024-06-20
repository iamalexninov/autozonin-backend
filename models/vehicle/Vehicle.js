const { Schema, Types, model } = require("mongoose");

const banners = require("./banners");
const details = require("./details");
const price = require("./price");
// favorite,like,owner,reviews,test-drives - more

const vehicleSchema = new Schema({
  banners: banners,
  details: details,
  price: price,
});

const Vehicle = model("Vehicle", vehicleSchema);

module.exports = Vehicle;
