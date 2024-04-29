const fs = require("fs").promises;
const path = require("path");
const { v4: uuidv4 } = require("uuid");

const users = path.join(__dirname, "../data/users.json");

const getUsers = async () => {
  try {
    const usersList = await fs.readFile(users, "utf8");
    const parsedUsersList = JSON.parse(usersList);
    return parsedUsersList;
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
    const usersList = await getUsers();
    const newUser = { id: uuidv4(), ...body };
    const newUserList = [...usersList, newUser];
    await fs.writeFile(users, JSON.stringify(newUserList), "utf8");
    return newUser;
  } catch (error) {
    throw error;
  }
};

const updateUserById = async (userId, body) => {
  try {
    const initialUser = await getUsersById(userId);
    const usersList = await getUsers();
    const updatedUser = { ...initialUser, ...body };
    const updatedUserList = usersList.map((user) => (id === userId ? updatedUser : user));
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
    console.log({ newUsersList });
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
