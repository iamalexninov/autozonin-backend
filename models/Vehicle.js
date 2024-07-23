const { Schema, model } = require("mongoose");

const vehicleSchema = new Schema({
  banner: { type: String },
  details: {
    title: {
      type: String,
      required: [true, "Title of the vehicle is required."],
    },
    tagline: {
      type: String,
      required: [true, "Tagline of the vehicle is required."],
    },
    category: {
      type: String,
      required: [true, "Category of the vehicle is required."],
    },
    label: { type: String },
    condition: {
      type: String,
      required: [true, "Condition of the vehicle is required."],
    },
    type: {
      type: String,
      required: [true, "Type of the vehicle is required."],
    },
    make: {
      type: String,
      required: [true, "Make of the vehicle is required."],
    },
    model: {
      type: String,
      required: [true, "Model of the vehicle is required."],
    },
    specification: {
      type: String,
      required: [true, "Specification of the vehicle is required."],
    },
    year: {
      type: String,
      required: [true, "Year of the vehicle is required."],
    },
    driveType: {
      type: String,
      required: [true, "Drive Type of the vehicle is required."],
    },
    transmission: {
      type: String,
      required: [true, "Transmission of the vehicle is required."],
    },
    fuel: {
      type: String,
      required: [true, "Fuel of the vehicle is required."],
    },
    mileage: {
      type: Number,
      required: [true, "Mileage of the vehicle is required."],
    },
    engineSize: {
      type: Number,
      required: [true, "Engine Size of the vehicle is required."],
    },
    cylinder: {
      type: Number,
      required: [true, "Cylinder of the vehicle is required."],
    },
    color: {
      type: String,
      required: [true, "Color of the vehicle is required."],
    },
    door: {
      type: Number,
      required: [true, "Door of the vehicle is required."],
    },
    vin: { type: String },
    description: {
      type: String,
      required: [true, "Description of the vehicle is required."],
    },
  },
  features: {
    interior: [{ type: String }],
    exterior: [{ type: String }],
    safety: [{ type: String }],
    comfort: [{ type: String }],
  },
  price: { type: Number },
});

const Vehicle = model("Vehicle", vehicleSchema);

module.exports = Vehicle;
