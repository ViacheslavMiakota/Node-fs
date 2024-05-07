const { ObjectId } = require("mongodb");
const { getCollections } = require("../model/collections");

const collections = getCollections();

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
    const { Users } = collections;
    const userById = await Users.findOne({ _id: new ObjectId(userId) });
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
    const { Users } = collections;
    await Users.updateOne({ _id: new ObjectId(userId) }, { $set: body });
    const updatedUser = await getUserById(userId);
    return updatedUser;
  } catch (error) {
    throw error;
  }
};

const deleteUserById = async (userId) => {
  try {
    const { Users } = collections;
    await Users.updateOne({ _id: new ObjectId(userId) });
    const newUsersList = await getUsers();
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
