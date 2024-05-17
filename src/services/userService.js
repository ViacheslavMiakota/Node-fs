const { User } = require("../model/userModel");

const getUsers = async () => {
  try {
    const usersList = await User.find();
    return usersList;
  } catch (error) {
    throw error;
  }
};

const getUserById = async (userId) => {
  try {
    const userById = await User.findById(userId);
    return userById;
  } catch (error) {
    throw error;
  }
};

const addUser = async (body) => {
  try {
    const newUser = await User.create(body);
    return newUser;
  } catch (error) {
    throw error;
  }
};

const updateUserById = async (userId, body) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { $set: body },
      { new: true }
    );
    return updatedUser;
  } catch (error) {
    throw error;
  }
};

const deleteUserById = async (userId) => {
  try {
    const newUsersList = await User.findByIdAndDelete(userId);
    return newUsersList;
  } catch (error) {
    throw error;
  }
};
const addFavoriteMovie = async (userId, movieId) => {
  try {
    const user = await User.findById(userId);
    const favorite = user.favorites.includes(movieId);
    if (!favorite) {
      user.favorites.push(movieId);
      await user.save();
    }
    return user;
  } catch (error) {
    throw error;
  }
};

const getFavoriteMovies = async (userId) => {
  try {
    const user = await User.findById(userId).populate("favorites");
    return user.favorites;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  addUser,
  getUsers,
  getUserById,
  updateUserById,
  deleteUserById,
  addFavoriteMovie,
  getFavoriteMovies,
};
