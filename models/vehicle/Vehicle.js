const { Schema, Types, model } = require("mongoose");

const details = require("./details");
const price = require("./price");
const Features = require("./Features");
const media = require("./media");
// favorite,like,owner,reviews,test-drives - more

const vehicleSchema = new Schema({
  details,
  price,
  media,
  // features: Features.schema,
});

const Vehicle = model("Vehicle", vehicleSchema);

module.exports = Vehicle;
