const router = require("express").Router();
const Vehicle = require("../models/Vehicle");
const {
  getVehicle,
  getVehicles,
  createVehicle,
} = require("../services/vehicle");

router.get("/:id", async (req, res) => {
  const id = req.params.id;

  try {
    const vehicle = await getVehicle(id);
    res.json(vehicle);
  } catch (error) {}
});

router.get("/", async (req, res) => {
  const { condition, category, type, make, model } = req.query;

  let filter = {};

  if (category) filter["details.category"] = category;
  if (condition) filter["details.condition"] = condition;
  if (type) filter["details.type"] = type;
  if (make) filter["details.make"] = make;
  if (model) filter["details.model"] = model;

  try {
    const vehicles = await getVehicles(filter);
    res.status(201).json(vehicles);
  } catch (error) {
    console.error(error);
  }
});

router.post("/create", async (req, res) => {
  const data = {
    banner: req.body.banner,
    details: req.body.details,
    features: req.body.features,
    price: Number(req.body.price),
  };

  const vehicle = await createVehicle(data);
  res.json(vehicle);
});

module.exports = router;
