const express = require("express");
const { validateUser } = require("../middlewares/validates");

const usersRouter = express.Router();
const {
  addUserController,
  getUsersController,
  getUserByIdController,
  updateUserByIdController,
  deleteUserController,
} = require("../controllers/userController");
const { asyncWrapper } = require("../helpers/apiHelpers");

usersRouter.post("/user", validateUser, asyncWrapper(addUserController));

usersRouter.get("/users", asyncWrapper(getUsersController));

usersRouter.get("/user/:userId", asyncWrapper(getUserByIdController));

usersRouter.patch("/user/:userId", updateUserByIdController);

usersRouter.delete("/user/:userId", deleteUserController);

module.exports = usersRouter;
