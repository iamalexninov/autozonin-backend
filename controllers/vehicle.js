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
  const vehicles = await getVehicles();
  res.json(vehicles);
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
