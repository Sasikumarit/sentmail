const nodemailer = require("nodemailer");
let transporter = nodemailer.createTransport({
  // service: "gmail",
  host: "smtp.gmail.com",
  port: 587,
  //secure: false,
  auth: {
    user: "Your-Mail",
    pass: "Your-Password",
  },
});

module.exports = transporter;
