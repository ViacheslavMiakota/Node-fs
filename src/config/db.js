const mongoose = require("mongoose");
require("colors");

const connectDb = async () => {
  try {
    const db = await mongoose.connect(process.env.DB_URI);
    console.log(`Database connection successful`.white.bold.bgGreen);
  } catch (error) {
    console.log(error.message.white.bgRed.bold);
    process.exit(1);
  }
};

module.exports = connectDb;
