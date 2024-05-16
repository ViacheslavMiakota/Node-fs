const { UnauthorizedException } = require("../helpers/exceptions");
const jwt = require("jsonwebtoken");
const { User } = require("../model/userModel");

const JWT_SECRET = process.env.JWT_SECRET;

// Bearer token

const authGuard = async (req, res, next) => {
  try {
    const token = req.headers?.authorization?.split(" ")[1];
    if (!token) {
      throw new UnauthorizedException();
    }

    const jwtPayload = jwt.verify(token, JWT_SECRET);
    console.log(jwtPayload);
    const user = await User.findOne({ _id: jwtPayload.id });
    console.log(user);
    if (!user) {
      throw new UnauthorizedException();
    }
    req.user = user;
    next();
  } catch {
    next(new UnauthorizedException());
  }
};

module.exports = { authGuard };
