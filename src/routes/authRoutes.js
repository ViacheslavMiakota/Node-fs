const express = require("express");
const authRouter = express.Router();

const {
  registerController,
  loginController,
  getCurentUser,
} = require("../controllers/authController");
const { asyncWrapper } = require("../helpers/apiHelpers");

authRouter.post("/register", asyncWrapper(registerController));

authRouter.post("/login", asyncWrapper(loginController));

authRouter.get("/curent", getCurentUser);

module.exports = authRouter;
