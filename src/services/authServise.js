const { User } = require("../model/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const { BadRequestException, ConflictException } = require("../helpers/exceptions");

const registerServise = async (email, password, name, phoneNumber) => {
  const existedUser = await User.findOne({ email });
  if (existedUser) {
    throw new ConflictException("Email already in use");
  }
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const newUser = new User();
  Object.assign(newUser, {
    email,
    password: hashedPassword,
    name,
    phoneNumber,
  });
  await newUser.save();
  return newUser;
};
const loginServise = async (email, password) => {
  const user = await User.findOne({ email });
  const passwordCompare = await bcrypt.compare(password, user.password);
  if (!user || !passwordCompare) {
    throw new BadRequestException("Email or password invalid");
  }

  const jwtPayload = {
    email: user.email,
    id: user._id,
  };

  const JWT_SECRET = process.env.JWT_SECRET;
  const JWT_EXPIRATION_TIME = process.env.JWT_EXPIRATION_TIME;

  const token = jwt.sign(jwtPayload, JWT_SECRET, { expiresIn: JWT_EXPIRATION_TIME });
  return token;
};
module.exports = { registerServise, loginServise };
