const fs = require("fs").promises;
const { getCollections } = require("../model/collections");

const collections = getCollections;

const getUsers = async () => {
  try {
    const { Users } = collections;
    const usersList = await Users.find({}).toArray();
    console.log(usersList);
    return usersList;
  } catch (error) {
    throw error;
  }
};

const getUserById = async (userId) => {
  try {
    const usersList = await getUsers();
    const userById = usersList.find(({ id }) => userId === id);
    return userById;
  } catch (error) {
    throw error;
  }
};

const addUser = async (body) => {
  try {
    const { Users } = collections;
    const newUser = await Users.insertOne(body);
    const savedUser = await getUserById(newUser.insertedId);
    return savedUser;
  } catch (error) {
    throw error;
  }
};

const updateUserById = async (userId, body) => {
  try {
    const initialUser = await getUserById(userId);
    const usersList = await getUsers();
    const updatedUser = { ...initialUser, ...body };
    const updatedUserList = usersList.map((user) =>
      user.id === userId ? updatedUser : user
    );
    await fs.writeFile(users, JSON.stringify(updatedUserList), "utf8");
    return updatedUser;
  } catch (error) {
    throw error;
  }
};

const deleteUserById = async (userId) => {
  try {
    const usersList = await getUsers();
    const newUsersList = usersList.filter(({ id }) => userId !== id);
    await fs.writeFile(users, JSON.stringify(newUsersList), "utf8");
    return newUsersList;
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
};
