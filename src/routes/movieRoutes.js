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

moviesRouter.post("/movie", asyncWrapper(addMovieController));

moviesRouter.get("/movies", authGuard, asyncWrapper(getMoviesController));

moviesRouter.get("/movie/:movieId", asyncWrapper(getMovieByIdController));

moviesRouter.patch("/movie/:movieId", asyncWrapper(updateMovieByIdController));

moviesRouter.delete("/movie/:movieId", asyncWrapper(deleteMovieController));

module.exports = moviesRouter;
