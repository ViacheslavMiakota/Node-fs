const {
  addMovie,
  getMovies,
  getMovieById,
  updateMovieById,
  deleteMovieById,
} = require("../services/movieServise");

const { statusCode } = require("../helpers/codeError");

const getMoviesController = async (req, res, next) => {
  const movies = await getMovies();
  res.status(statusCode.OK).json(movies);
};

const getMovieByIdController = async (req, res, next) => {
  const { movieId } = req.params;
  const movie = await getMovieById(movieId);
  if (!movie) {
    return next({
      status: statusCode.NOT_FOUND,
      message: "Not found",
    });
  }
  res.status(statusCode.OK).json(movie);
};

const addMovieController = async (req, res, next) => {
  const user = req.user;
  const newMovie = await addMovie(req.body, user.id);
  res.status(statusCode.CREATED).json(newMovie);
};

const updateMovieByIdController = async (req, res, next) => {
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
};

const deleteMovieController = async (req, res, next) => {
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
};

module.exports = {
  addMovieController,
  getMoviesController,
  getMovieByIdController,
  updateMovieByIdController,
  deleteMovieController,
};
