const { MongoClient } = require("mongodb");
const { collections } = require("../model/collections");

require("dotenv").config();

const { DB_URI, MONGO_DB_NAME } = process.env;

const MONGO_DB_CONNECTION = DB_URI || "";

const DB_NAME = MONGO_DB_NAME;

require("colors");

const connectDb = async () => {
  try {
    const client = new MongoClient(MONGO_DB_CONNECTION);

    const connect = await client.connect();
    const db = connect.db(DB_NAME);
    const users = db.collection("users");
    collections.Users = users;
    console.log(`Database connection successful`.white.bold.bgGreen);
  } catch (error) {
    console.log("Can not conect to the  DB: ".white.bgRed.bold, error);
    process.exit(1);
  }
};

module.exports = connectDb;
