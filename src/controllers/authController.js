const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const {
  registerServise,
  loginSevise,
  getCurentUserServise,
} = require("../services/authServise");

const { statusCode } = require("../helpers/codeError");

const register = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    await registerServise(email, password);

    res.status(statusCode.CREATED).json({ status: "success" });
  } catch (error) {
    res
      .status(error.statusCode || statusCode.INTERNAL_SERVER_ERROR)
      .json({ message: error.message });
  }
};
const login = async (req, res, next) => {};
const getCurentUser = async (req, res, next) => {};

module.exports = { register, login, getCurentUser };
