const router = require("express").Router();

async function addVehicle(req, res) {
  res.json("Router works");
}

router.get("/create", addVehicle);
// router.post("/create", addVehicle);

module.exports = router;
