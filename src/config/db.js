const mongoose = require("mongoose");

require("dotenv").config();

const { DB_URI } = process.env;

const MONGO_DB_CONNECTION = DB_URI || "";

require("colors");

const connectDb = async () => {
  try {
    await mongoose.connect(MONGO_DB_CONNECTION);
    console.log(`Database connection successful`.white.bold.bgGreen);
  } catch (error) {
    console.log("Can not conect to the  DB: ".white.bgRed.bold, error);
    process.exit(1);
  }
};

module.exports = connectDb;
