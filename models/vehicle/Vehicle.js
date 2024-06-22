const { Schema, Types, model } = require("mongoose");

const banners = require("./banners");
const details = require("./details");
const price = require("./price");
const features = require("./features");
const location = require("./location");
// favorite,like,owner,reviews,test-drives - more

const vehicleSchema = new Schema({
  banners: banners,
  details: details,
  price: price,
  // features: features,
  // location: location,
});

const Vehicle = model("Vehicle", vehicleSchema);

module.exports = Vehicle;
