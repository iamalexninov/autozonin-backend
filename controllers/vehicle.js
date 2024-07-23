const router = require("express").Router();
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
  const { category, condition, type, make, model } = req.query;

  let result;
  const vehicles = await getVehicles();

  result = vehicles;

  if (category) {
    result = vehicles.filter((item) => item.details.category === category);
  }

  if (condition) {
    result = vehicles.filter((item) => item.details.condition === condition);
  }

  if (type) {
    result = vehicles.filter((item) => item.details.type === type);
  }

  if (make) {
    result = vehicles.filter((item) => item.details.make === make);
  }

  if (model) {
    result = vehicles.filter((item) => item.details.model === model);
  }
  
  res.json(result);
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
