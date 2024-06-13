const { Schema, Types, model } = require("mongoose");

const vehicleSchema = new Schema({
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
  interiorFeatures: {
    type: String,
    enum: [
      "Air Conditioner",
      "Digital Odometer",
      "Heater",
      "Leather Seats",
      "Panoramic Moonroof",
      "Tachometer",
      "Touchscreen Display",
      "Anti-lock Braking",
    ],
  },
  safetyFeatures: {
    type: String,
    enum: [
      "Brake Assist",
      "Child Safety Locks",
      "Driver Air Bag",
      "Power Door Locks",
      "Stability Control",
      "Traction Control",
    ],
  },
  exteriorFeatures: {
    type: String,
    enum: [
      "Fog Lights Front",
      "Rain Sensing Wiper",
      "Rear Spoiler",
      "Windows - Electric",
    ],
  },
  comfortFeatures: {
    type: String,
    enum: [
      "Android Auto",
      "Apple CarPlay",
      "Bluetooth",
      "HomeLink",
      "Power Steering",
      "Vanity Mirror",
    ],
  },
  // favorite,like,owner,reviews,test-drives - more
});

const Vehicle = model("Vehicle", vehicleSchema);

module.exports = Vehicle;
