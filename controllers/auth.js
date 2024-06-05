const router = require("express").Router();

// [] - register
// [] - login
// [] - logout
// [] - edit user
function signUp(req, res) {
  res.json("register");
}

function signIn(req, res) {
  res.json("login");
}

router.post("/signup", signUp);
router.post("/signin", signIn);

module.exports = router;
