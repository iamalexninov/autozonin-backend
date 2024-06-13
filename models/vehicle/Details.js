const { Schema, model } = require("mongoose");

const detailsSchema = new Schema({
  title: { type: String },
  tagline: { type: String },
  category: {
    type: String,
    enum: ["car", "bus", "motorcycle", "truck", "suv", "van"],
  },
  label: {
    type: String,
    enum: [
      "certified pre-owned",
      "one-owner",
      "accident-free",
      "recently-serviced",
      "low-price",
      "great-deal",
    ],
  },
  condition: { type: String, enum: ["new", "used", "damaged"] },
  type: {
    type: String,
    enum: [
      "convertible",
      "coupe",
      "electric",
      "hatchback",
      "station vagon",
      "hybrid",
      "sedan",
      "suv",
      "truck",
      "motorcycle",
      "van",
    ],
  },
  // TODO: consider way to add make and model - API
  make: { type: String },
  model: { type: String },
  specification: { type: String },
  year: { type: Number },
  driveType: {
    type: String,
    enum: ["all-wheel", "front-wheel", "rear-wheel", "four-wheel"],
  },
  transmission: {
    type: String,
    enum: ["manual", "automatic", "cvt", "dct", "amt", "tiptronic", "smg"],
  },
  fuelType: {
    type: String,
    enum: ["petrol", "diesel", "electricity", "hybrid", "gasoline"],
  },
  mileage: { type: Number },
  engineSize: { type: Number },
  torque: { type: Number },
  cylinder: { type: Number },
  color: { type: String },
  doors: { type: String },
  offerType: { type: String, enum: ["sell", "loan", "hot-offer"] },
  vin: { type: String },
});

const Details = model("Details", detailsSchema);

module.exports = Details;
