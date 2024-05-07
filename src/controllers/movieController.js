const {
  addMovie,
  getMovies,
  getMovieById,
  updateMovieById,
  deleteMovieById,
} = require("../services/movieServise");

const { statusCode } = require("../helpers/codeError");

const getMoviesController = async (req, res, next) => {
  try {
    const movies = await getMovies();
    res.status(statusCode.OK).json(movies);
  } catch (error) {
    next(error);
  }
};

const getMovieByIdController = async (req, res, next) => {
  try {
    const { movieId } = req.params;
    const movie = await getMovieById(movieId);
    if (!movie) {
      return next({
        status: statusCode.NOT_FOUND,
        message: "Not found",
      });
    }
    res.status(statusCode.OK).json(movie);
  } catch (error) {
    next(error);
  }
};

const addMovieController = async (req, res, next) => {
  try {
    const newMovie = await addMovie(req.body);
    res.status(statusCode.CREATED).json(newMovie);
  } catch (error) {
    next(error);
  }
};

const updateMovieByIdController = async (req, res, next) => {
  try {
    const { movieId } = req.params;
    const movie = await getMovieById(movieId);
    if (!movie) {
      return next({
        status: statusCode.BAD_REQUEST,
        message: `Not found user with id ${movieId}`,
      });
    }
    const updatedMovie = await updateMovieById(movieId, req.body);
    res.status(statusCode.OK).json(updatedMovie);
  } catch (error) {
    next(error);
  }
};

const deleteMovieController = async (req, res, next) => {
  try {
    const id = req.params.movieId;
    const movieDelete = await getMovieById(id);
    if (!movieDelete) {
      return next({
        status: statusCode.BAD_REQUEST,
        message: `Not found user with id ${id}`,
      });
    }
    const newMovieList = await deleteMovieById(id);
    res.status(statusCode.OK).json(newMovieList);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  addMovieController,
  getMoviesController,
  getMovieByIdController,
  updateMovieByIdController,
  deleteMovieController,
};
