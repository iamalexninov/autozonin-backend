const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { SALT_ROUNDS, SECRET } = require("../config/config");

async function registerUser(data) {
  const existing = await User.findOne({
    username: data.username,
    email: data.email,
  });

  const errorMsg = "Username or Email already exists. Try Again.";
  if (existing) throw new Error(errorMsg);

  const user = new User({
    username: data.username,
    email: data.email,
    phone: data.phone,
    password: await hashPassword(data.password),
  });

  await user.save();

  return createToken(user);
}

function loginUser(data) {}

async function hashPassword(password) {
  return await bcrypt.hash(password, SALT_ROUNDS);
}

async function createToken(user) {
  return jwt.sign(
    {
      _id: user._id,
      username: user.username,
      email: user.email,
      phone: user.phone,
      password: user.password,
    },
    SECRET
  );
}

module.exports = {
  register: registerUser,
  login: loginUser,
};
