const mongoose = require("mongoose");

const { Schema } = mongoose;

const UserShema = new Schema({
  email: { type: String, required: [true, "Email is required"], unique: true },
  name: { type: String, required: [true, "Set name for user"] },
  phoneNumber: { type: Number, required: true },
});

const User = mongoose.model("user", UserShema);

module.exports = { User };
