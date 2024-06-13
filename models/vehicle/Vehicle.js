const { Schema, Types, model } = require("mongoose");

const Details = require("./Details");
const Price = require("./Price");
const Features = require("./Features");
// favorite,like,owner,reviews,test-drives - more

const vehicleSchema = new Schema({
  details: Details,
  price: Price,
  // features: Features.schema,
});

const Vehicle = model("Vehicle", vehicleSchema);

module.exports = Vehicle;
