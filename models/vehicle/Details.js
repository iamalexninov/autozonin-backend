const details = {
  title: { type: String },
  tagline: { type: String },
  // TODO: use enum
  category: { type: String },
  // TODO: use enum
  label: { type: String },
  // TODO: use enum
  condition: { type: String },
  // TODO: use enum
  type: { type: String },
  // TODO: consider way to add make and model - API
  make: { type: String },
  model: { type: String },
  specification: { type: String },
  year: { type: Number },
  // TODO: use enum
  driveType: { type: String },
  // TODO: use enum
  transmission: { type: String },
  // TODO: use enum
  fuelType: { type: String },
  mileage: { type: Number },
  engineSize: { type: Number },
  torque: { type: Number },
  cylinder: { type: Number },
  color: { type: String },
  doors: { type: Number },
  // TODO: use enum
  offerType: { type: String },
  vin: { type: String },
};

module.exports = details;
