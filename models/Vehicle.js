const { Schema, Types, model } = require("mongoose");

const { requiredText } = require("../utils/utils");

const vehicleSchema = new Schema({
  banners: { type: String, default: [] },
  details: {
    title: { type: String, required: requiredText("Title") },
    tagline: { type: String, required: requiredText("Tagline") },
    condition: {
      type: String,
      enum: ["new", "used", "damaged"],
      required: requiredText("Category"),
    },
    label: { type: String },
    type: {
      type: String,
      enum: [
        "sedan",
        "suv",
        "truck",
        "coupe",
        "convertible",
        "hatchback",
        "minivan",
        "stationWagon",
        "crossover",
        "hybrid",
      ],
      required: requiredText("Type"),
    },
    make: { type: String, required: requiredText("Make") },
    model: { type: String, required: requiredText("Model") },
    specification: { type: String, required: requiredText("Specification") },
    year: { type: Number, required: requiredText("Year") },
    driveType: { type: String, enum: ["all", "front", "rear"] },
    transmission: {
      type: String,
      enum: ["automatic", "manual", "cvt", "dct"],
      required: requiredText("Transmission"),
    },
    fuelType: {
      type: String,
      enum: ["diesel", "electric", "petrol", "hybrid", "gasoline"],
      required: requiredText("Fuel Type"),
    },
    mileage: { type: Number, required: requiredText("Mileage") },
    engineSize: { type: Number, required: requiredText("Engine Size") },
    torque: { type: Number, required: requiredText("Torque") },
    cylinder: { type: Number, required: requiredText("Cylinder") },
    color: { type: String, required: requiredText("Color") },
    doors: { type: Number, required: requiredText("Doors") },
    offerType: {
      type: String,
      enum: ["hot", "sell", "loan", "lease", "tradeIn"],
      required: requiredText("Offer Type"),
      default: "sell",
    },
    vin: { type: String },
    description: { type: String, required: requiredText("Description") },
  },
  features: {
    interior: { type: String, default: [] },
    exterior: { type: String, default: [] },
    comfort: { type: String, default: [] },
    safety: { type: String, default: [] },
  },
  price: {
    amount: { type: Number },
    currency: { type: String, default: "€" },
    negotiable: { type: Boolean, default: false },
    leaseAvailable: { type: Boolean, default: false },
    leaseInititalPayment: { type: Number },
    monthlyPayment: { type: Number },
  },
});

const Vehicle = model("Vehicle", vehicleSchema);

module.exports = Vehicle;
