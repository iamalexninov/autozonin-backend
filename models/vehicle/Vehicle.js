const { Schema, Types, model } = require("mongoose");

const details = require("./details");
const price = require("./price");
const media = require("./media");
const Features = require("./Features");
// favorite,like,owner,reviews,test-drives - more

const vehicleSchema = new Schema({
  media,
  details,
  price,
});

const Vehicle = model("Vehicle", vehicleSchema);

module.exports = Vehicle;
