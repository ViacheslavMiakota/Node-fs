const { registerServise, loginServise } = require("../services/authServise");

const { statusCode } = require("../helpers/codeError");

const registerController = async (req, res, next) => {
  const { email, password, name, phoneNumber } = req.body;
  await registerServise(email, password, name, phoneNumber);

  res.status(statusCode.CREATED).json({ status: "success" });
};
const loginController = async (req, res, next) => {
  const { email, password } = req.body;

  const token = await loginServise(email, password);
  res.status(statusCode.CREATED).json(token);
};

module.exports = { registerController, loginController };
