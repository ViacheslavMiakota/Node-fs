const express = require("express");
const { validateUser } = require("../middlewares/validates");

const usersRouter = express.Router();
const {
  addUserController,
  getUsersController,
  getUserByIdController,
  updateUserByIdController,
  deleteUserController,
  getCurentUserController,
  addFavoriteMovieController,
  getFavoriteMoviesController,
} = require("../controllers/userController");
const { asyncWrapper } = require("../helpers/apiHelpers");
const { authGuard } = require("../middlewares/authGuard");

usersRouter.post("/user", authGuard, validateUser, asyncWrapper(addUserController));

usersRouter.get("/users", authGuard, asyncWrapper(getUsersController));

usersRouter.get("/user/:userId", authGuard, asyncWrapper(getUserByIdController));

usersRouter.patch("/user/:userId", authGuard, validateUser, updateUserByIdController);

usersRouter.delete("/user/:userId", authGuard, deleteUserController);

usersRouter.get("/users/me", authGuard, getCurentUserController);

usersRouter.post("/users/me/favorites", authGuard, addFavoriteMovieController);

usersRouter.get("/users/me/favorites", authGuard, getFavoriteMoviesController);

module.exports = usersRouter;
