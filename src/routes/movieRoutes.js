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

moviesRouter.post("/movie", addMovieController);

moviesRouter.get("/movies", getMoviesController);

moviesRouter.get("/movie/:movieId", getMovieByIdController);

moviesRouter.patch("/movie/:movieId", updateMovieByIdController);

moviesRouter.delete("/movie/:movieId", deleteMovieController);

module.exports = moviesRouter;
