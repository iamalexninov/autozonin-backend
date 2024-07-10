function isUser(req, res, next) {
  if (req.user) {
    next();
  } else {
    res.status(401).json("Unauthorized: You need to be logged in.");
  }
}

function isGuest(req, res, next) {
  if (!req.user) {
    next();
  } else {
    res.status(403).json("Forbidden: You are already logged in.");
  }
}

module.exports = {
  isUser,
  isGuest,
};
