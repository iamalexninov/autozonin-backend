const categoryEnum = ["new", "used", "damaged"];
const labelEnum = [
  "greatPrice",
  "lowMileage",
  "oneOwner",
  "certifiedPreOwner",
  "excellentCondition",
  "fuelEfficient",
];
const conditionEnum = ["new", "used", "damaged"];
const typeEnum = [
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
];
const driveTypeEnum = ["all", "front", "rear"];
const transmissionEnum = ["automatic", "manual", "cvt", "dct"];
const fuelEnum = ["diesel", "electric", "petrol", "hybrid", "gasoline"];

function requiredText(label) {
  const text = `Vehicle ${label} field is required. Please fill it.`;
  return [true, text];
}

const details = {
  title: { type: String, required: requiredText("Title") },
  tagline: { type: String, required: requiredText("Tagline") },
  category: {
    type: String,
    enum: categoryEnum,
    required: requiredText("Category"),
  },
  label: { type: String, enum: labelEnum, default: "all" },
  condition: {
    type: String,
    enum: conditionEnum,
    required: requiredText("Condition"),
  },
  type: {
    type: String,
    enum: typeEnum,
    required: requiredText("Type"),
  },
  make: { type: String, required: requiredText("Make") },
  model: { type: String, required: requiredText("Model") },
  specification: { type: String, required: requiredText("Specification") },
  year: { type: Number, required: requiredText("Year") },
  driveType: { type: String, enum: driveTypeEnum },
  transmission: {
    type: String,
    enum: transmissionEnum,
    required: requiredText("Transmission"),
  },
  // TODO: use enum
  fuelType: {
    type: String,
    enum: fuelEnum,
    required: requiredText("Fuel Type"),
  },
  mileage: { type: Number, required: requiredText("Mileage") },
  engineSize: { type: Number, required: requiredText("Engine Size") },
  torque: { type: Number, required: requiredText("Torque") },
  cylinder: { type: Number, required: requiredText("Cylinder") },
  color: { type: String, required: requiredText("Color") },
  doors: { type: Number, required: requiredText("Doors") },
  // TODO: use enum
  vin: { type: String },
  description: { type: String, required: requiredText("Description") },
};

module.exports = details;
