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

usersRouter.post("/user", validateUser, addUserController);

usersRouter.get("/users", getUsersController);

usersRouter.get("/user/:userId", getUserByIdController);

usersRouter.patch("/user/:userId", updateUserByIdController);

usersRouter.delete("/user/:userId", deleteUserController);

module.exports = usersRouter;
