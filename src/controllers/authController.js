const {
  registerServise,
  loginServise,
  getCurentUserServise,
} = require("../services/authServise");

const { statusCode } = require("../helpers/codeError");

const registerController = async (req, res, next) => {
  const { email, password, name, phoneNumber } = req.body;
  await registerServise(email, password, name, phoneNumber);

  res.status(statusCode.CREATED).json({ status: "success" });
};
const loginController = async (req, res, next) => {
  const { email, password } = req.body;

  const token = await loginServise(email, password);
  console.log(token);
  res.status(statusCode.CREATED).json(token);
};
const getCurentUser = async (req, res, next) => {};

module.exports = { registerController, loginController, getCurentUser };
