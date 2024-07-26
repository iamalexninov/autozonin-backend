const Vehicle = require("../models/Vehicle");

async function getVehicle(id) {
  return await Vehicle.findById(id);
}

async function getVehicles(filter) {
  const vehicles = await Vehicle.find(filter);
  return vehicles;
}                                                                                                                                                                                          
async function createVehicle(data) {
  const vehicle = new Vehicle(data);
  await vehicle.save();
  return vehicle;
}

module.exports = {
  getVehicle,
  getVehicles,
  createVehicle,
};
