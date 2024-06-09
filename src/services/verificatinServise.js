const { createHmac } = require("node:crypto");
const { Verification } = require("../model/verificationModel");

const createVerificationCode = (userId) => {
  const secret = "Werwer";
  const hashedCode = createHmac("sha256", ` ${secret}`)
    .update(`${userId}-${Date.now()}`)
    .digest("hex");
  const newVerificationCode = new Verification({ code: hashedCode, active: true });
  return newVerificationCode;
};
module.exports = { createVerificationCode };
