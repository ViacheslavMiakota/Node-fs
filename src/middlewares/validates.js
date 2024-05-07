const Joi = require("joi");
const { statusCode } = require("../helpers/codeError");

const { getCollections } = require("../model/collections");
const collections = getCollections();

const userSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  phoneNumber: Joi.string().pattern(new RegExp("^[0-9]{10}$")).required(),
});

exports.validateUser = async (req, res, next) => {
  try {
    const { error } = userSchema.validate(req.body);

    if (error) {
      return res
        .status(statusCode.BAD_REQUEST)
        .json({ message: error.details[0].message });
    }
    const { Users } = collections;
    const existingUser = await Users.findOne({ phoneNumber: req.body.phoneNumber });

    if (existingUser) {
      return res
        .status(statusCode.BAD_REQUEST)
        .json({ message: "Phone number already exists" });
    }
    next();
  } catch (error) {
    next(error);
  }
};
