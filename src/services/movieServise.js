const { Movie } = require("../model/movieModel");

const getMovies = async () => {
  try {
    const moviesList = await Movie.find();
    return moviesList;
  } catch (error) {
    throw error;
  }
};

const getMovieById = async (movieId) => {
  try {
    const movieById = await Movie.findById(movieId);
    return movieById;
  } catch (error) {
    throw error;
  }
};

const addMovie = async (body) => {
  try {
    const newMovie = await Movie.create(body);
    return newMovie;
  } catch (error) {
    throw error;
  }
};

const updateMovieById = async (movieId, body) => {
  try {
    const updatedMovie = await Movie.findByIdAndUpdate(
      movieId,
      { $set: body },
      { new: true }
    );
    return updatedMovie;
  } catch (error) {
    throw error;
  }
};

const deleteMovieById = async (movieId) => {
  try {
    const newMoviesList = await Movie.findByIdAndDelete(movieId);
    return newMoviesList;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  addMovie,
  getMovies,
  getMovieById,
  updateMovieById,
  deleteMovieById,
};
