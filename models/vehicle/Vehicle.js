const { Schema, Types, model } = require("mongoose");

const banners = require("./banners");
const details = require("./details");
const price = require("./price");
const features = require("./features");
const location = require("./location");

const vehicleSchema = new Schema({
  banners: banners,
  details: details,
  features: features,
  price: price,
});

const Vehicle = model("Vehicle", vehicleSchema);

module.exports = Vehicle;
