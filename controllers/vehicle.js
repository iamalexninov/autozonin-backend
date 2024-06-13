const router = require("express").Router();
const { create } = require("../services/vehicle");

async function addVehicle(req, res) {
  const data = {
    details: req.body.details,
    price: req.body.price,
  };

  const vehicle = await create(data);

  res.json(vehicle);
}

router.post("/create", addVehicle);

module.exports = router;
