const router = require("express").Router();
const {
  getVehicles,
  createVehicle,
  getVehicle,
} = require("../services/vehicle");

router.get("/:id", async (req, res) => {
  const { id } = req.body.id;

  try {
    const vehicle = await getVehicle(id);
    res.status(201).json(vehicle);
  } catch (error) {
    // error
  }
});

router("/", async (req, res) => {
  const vehicles = await getVehicles();
  res.json(vehicles);
});

router.post("/create", async (req, res) => {
  const data = {
    banners: req.body.banners,
    details: req.body.details,
    price: req.body.price,
  };

  const vehicle = await createVehicle(data);

  res.json(vehicle);
});

module.exports = router;
