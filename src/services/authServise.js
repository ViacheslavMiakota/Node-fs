const { User } = require("../model/userModel");
const bcrypt = require("bcrypt");

const { statusCode } = require("../helpers/codeError");

const registerServise = async (email, password, userName, phoneNumber) => {
  const existedUser = await User.findOne({ email });
  if (existedUser) {
    throw { statusCode: statusCode.CONFLICT, message: "Email already in use" };
  }
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const newUser = new User();
  Object.assign(newUser, {
    email,
    password: hashedPassword,
    userName,
    phoneNumber,
  });
  await newUser.save();
  return newUser;
};
const loginServise = async () => {};
module.exports = { registerServise, loginServise };
