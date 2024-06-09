const nodemailer = require("nodemailer");
const { ServiceUnavailableException } = require("../helpers/exceptions");

const SENDER = process.env.SENDER;
const EMAILPASSWORD = process.env.UKR_NET_Password;
const PORT = process.env.PORT;

const Mailgen = require("mailgen");

const transporter = nodemailer.createTransport({
  host: "smtp.ukr.net",
  port: 465,
  secure: true,
  auth: {
    user: SENDER,
    pass: EMAILPASSWORD,
  },
});

const send = async (config) => {
  try {
    const { from = SENDER, to, text, subject, html } = config;

    const info = await transporter.sendMail({
      from,
      to,
      subject,
      text,
      html,
    });
    console.log(info);
  } catch (error) {
    console.error(error.message);
    throw new ServiceUnavailableException(error.message);
  }
};

const sendVerificationEmail = async (email, code) => {
  try {
    const verificationLink = `http://localhost:${PORT}/${code}`;

    const html = `<p>To verify your email click to <a href="${verificationLink}"> link</a></p>`;
    send({ to: email, text: "Verify yuor email", subject: "Email verification", html });
  } catch (error) {
    throw new ServiceUnavailableException(error.message);
  }
};

module.exports = { sendVerificationEmail };

// const generateEmailTemplate = (link) => {
//   const mailGenerator = new Mailgen({
//     theme: "default",
//     product: {
//       name: "Mailgen",
//       link: link,
//     },
//   });

//   const email = {
//     body: {
//       name: "User",
//       intro: "Welcome to Mailgen! We’re very excited to have you on board.",
//       action: {
//         instructions: "To get started with Mailgen, please click here:",
//         button: {
//           color: "#22BC66", // Optional action button color
//           text: "Confirm your account",
//           link: link,
//         },
//       },
//       outro: "Need help, or have questions? Just reply to this email, we’d love to help.",
//     },
//   };

//   return mailGenerator.generate(email);
// };
