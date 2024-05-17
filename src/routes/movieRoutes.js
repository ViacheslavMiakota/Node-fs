const express = require("express");
// const { validateUser } = require("../middlewares/validates");

const moviesRouter = express.Router();

const {
  addMovieController,
  getMoviesController,
  getMovieByIdController,
  updateMovieByIdController,
  deleteMovieController,
} = require("../controllers/movieController");
const { asyncWrapper } = require("../helpers/apiHelpers");

const { authGuard } = require("../middlewares/authGuard");

moviesRouter.post("/movie", authGuard, asyncWrapper(addMovieController));

moviesRouter.get("/movies", asyncWrapper(getMoviesController));

moviesRouter.get("/movie/:movieId", asyncWrapper(getMovieByIdController));

moviesRouter.patch("/movie/:movieId", authGuard, asyncWrapper(updateMovieByIdController));

moviesRouter.delete("/movie/:movieId", authGuard, asyncWrapper(deleteMovieController));

module.exports = moviesRouter;
