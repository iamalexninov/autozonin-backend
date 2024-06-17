const router = require("express").Router();
const { getVehicles, create } = require("../services/vehicle");

const renderVehicles = async (req, res) => {
  const vehicles = await getVehicles();
  res.json(vehicles);
};

async function addVehicle(req, res) {
  const data = {
    details: req.body.details,
    price: req.body.price,
  };

  const vehicle = await create(data);

  res.json(vehicle);
}


router.get("/", renderVehicles);
router.post("/create", addVehicle);

module.exports = router;
