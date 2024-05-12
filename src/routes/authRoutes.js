const express = require("express");
const authRouter = express.Router();

const { register, login, getCurentUser } = require("../controllers/authController");
const { asyncWrapper } = require("../helpers/apiHelpers");

authRouter.post("/register", asyncWrapper(register));

authRouter.post("/login", login);

authRouter.get("/curent", getCurentUser);

module.exports = authRouter;
