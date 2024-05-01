const Joi = require("joi");
const { statusCode } = require("../helpers/codeError");

const allowedRoles = ["admin", "user", "moderator"];

const userSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  role: Joi.string()
    .valid(...allowedRoles)
    .required(),
});

exports.validateUser = (req, res, next) => {
  const { error } = userSchema.validate(req.body);

  if (error) {
    return res.status(statusCode.BAD_REQUEST).json({ message: error.details[0].message });
  }
  next();
};
