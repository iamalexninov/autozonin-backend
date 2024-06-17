const Vehicle = require("../models/vehicle/Vehicle");

const getVehicles = async () => await Vehicle.find({});

const create = async (data) => {
  // details: {
  //   title: "2022 Mercedes-Benz E 53 AMG Sedan",
  //   tagline: "Unleash Performance and Luxury",
  //   category: "Cars",
  //   label: "",
  //   condition: "New",
  //   type: "Sedan",
  //   make: "Mercedes-Benz",
  //   model: "E 53 AMG",
  //   specification: "3.0-liter inline-6 turbocharged engine",
  //   year: "2022",
  //   driveType: "All-Wheel Drive(AWD)",
  //   transmission: "Automatic",
  //   fuelType: "Gasoline",
  //   mileage: "0",
  //   engineSize: "3.0 litres",
  //   torque: "384",
  //   cylinder: "6",
  //   color: "black",
  //   doors: "4",
  //   offerType: "Sale",
  //   vin: "WDDZF6BB2NA123456",
  // },
  // price: {
  //   amount: 50000,
  // },

  const vehicle = new Vehicle({
    details: data.details,
    price: data.price,
  });

  await vehicle.save();

  return vehicle;
};

module.exports = {
  getVehicles,
  create,
};
