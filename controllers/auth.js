const router = require("express").Router();
const { register } = require("../services/auth");

// [] - register
// [] - login
// [] - logout
// [] - edit user

async function signUp(req, res) {
  const userData = {
    username: req.body.username,
    email: req.body.email,
    phone: req.body.phone,
    password: req.body.password,
  };

  const token = await register(userData);
  res.status(201).json(token);
}

async function signIn(req, res) {
  res.json("login");
}

router.post("/signup", signUp);
router.post("/signin", signIn);

module.exports = router;
