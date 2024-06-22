const { verifySession } = require("../services/auth");

module.exports = () => (req, res, next) => {
  const token = req.headers["x-authorization"];

  try {
    if (token) {
      const user = verifySession(token);
      req.user = user;
    }
    next();
  } catch (error) {
    res.status(401).json({ message: "Invalid access token. Please Sign In." });
  }
};
