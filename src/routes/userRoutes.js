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

usersRouter.post("/", validateUser, addUserController);

usersRouter.get("/", getUsersController);

usersRouter.get("/:id", getUserByIdController);

usersRouter.patch("/:userId", updateUserByIdController);

usersRouter.delete("/:userId", deleteUserController);

module.exports = usersRouter;
