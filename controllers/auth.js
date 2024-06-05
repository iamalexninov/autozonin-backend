const router = require("express").Router();

// [] - register
// [] - login
// [] - logout
// [] - edit user

async function signUp(req, res) {
  res.json("register");
}

async function signIn(req, res) {
  res.json("login");
}

router.post("/signup", signUp);
router.post("/signin", signIn);

module.exports = router;
