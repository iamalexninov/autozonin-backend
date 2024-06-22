const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { SALT_ROUNDS, SECRET } = require("../config/config");

const blacklist = [];

async function register(data) {
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

  return createSession(user);
}

async function login(email, password) {
  const user = await User.findOne({ email: new RegExp(`^${email}$`, "i") });
  if (!user) throw new Error("User doesn't exists. Please Sign Up.");

  const hasMatch = await bcrypt.compare(password, user.password);
  if (!hasMatch)
    throw new Error("Incorrect Email or Password. Please, Try Again.");

  return createSession(user);
}

function logout(token) {
  blacklist.push(token);
}

async function hashPassword(password) {
  return await bcrypt.hash(password, SALT_ROUNDS);
}

function createSession(user) {
  return {
    _id: user._id,
    email: user.email,
    username: user.username,
    type: user.type,
    accessToken: jwt.sign({ _id: user._id, email: user.email }, SECRET),
  };
}

function verifySession(token) {
  const payload = jwt.verify(token, SECRET);

  return {
    _id: payload._id,
    email: payload.email,
    username: payload.username,
    token,
  };
}

module.exports = {
  register,
  login,
  logout,
  verifySession,
};
