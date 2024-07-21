const router = require("express").Router();
const { getUsers, register, login } = require("../services/auth");

router.get("/users", async (req, res) => {
  try {
    const users = await getUsers();
    res.json(users);
  } catch (error) {
    console.error(error);
  }
});

router.post("/register", async (req, res) => {
  const data = {
    username: req.body.username,
    email: req.body.email,
    phone: req.body.phone,
    password: req.body.password,
  };

  try {
    const token = await register(data);
    res.json(token);
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
    const token = await login(data.email, data.password);
    res.json(token);
  } catch (error) {
    console.error(error);
  }
});

module.exports = router;
