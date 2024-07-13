function isUser() {
  return (req, res, next) => {
    if (req.user) {
      next();
    } else {
      res.status(401).json("Unauthorized: You need to be logged in.");
    }
  };
}

function isGuest() {
  return (req, res, next) => {
    if (!req.user) {
      next();
    } else {
      res.status(403).json("Forbidden: You are already logged in.");
    }
  };
}

function isAdmin() {
  return (req, res, next) => {
    if (req.user && req.user.role === "admin") {
      next();
    } else {
      res.status(403).json("Forbidden: Admin access only.");
    }
  };
}

module.exports = {
  isUser,
  isGuest,
  isAdmin,
};
