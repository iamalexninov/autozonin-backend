const router = require("express").Router();
const { register, login } = require("../services/auth");

router.post("/register", async (req, res) => {
  const data = {
    username: req.body.username,
    email: req.body.email,
    phone: req.body.phone,
    password: req.body.password,
  };

  try {
    const token = await register(data);
    res.status(204).json(token);
  } catch (error) {
    console.error(error);
  }
});

router.post("/login", async (req, res) => {
  const data = {
    email: req.body.email,
    password: req.body.password,
  };

  try {
    const token = await login(data);
    res.status(201).json(token);
  } catch (error) {
    console.error(error);
  }
});

module.exports = router;
