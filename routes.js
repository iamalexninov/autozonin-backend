const router = require("express").Router();

const authController = require("./controllers/auth");

router.use("/user", authController);

module.exports = router;
