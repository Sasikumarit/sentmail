const db = require("../config/db.config.js");
const dbmailmaster = db.Mailmasterdb;
const dbmaillogmaster = db.MailLogmasterdb;
const mailtransporter = require("../config/mail.config.js");

exports.createmailusermaster = (req, res) => {
  let mailmaster = {};

  try {
    mailmaster.firstname = req.body.firstname;
    mailmaster.lastname = req.body.lastname;
    mailmaster.email = req.body.email;
    mailmaster.age = req.body.age;
    dbmailmaster
      .create(mailmaster, {
        attributes: ["id", "firstname", "lastname", "email", "age"],
      })
      .then((response) => {
        res.status(200).json({ message: "Success", data: response });
      });
  } catch (error) {
    res.status(500).json({
      message: "Fail!",
      error: error.message,
    });
  }
};

exports.sentmail = (req, res) => {
  let mailmaster = {};

  try {
    console.log("reqdata", req.body);

    dbmailmaster
      .findAll({
        attributes: ["firstname", "lastname", "email", "age"],
      })
      .then((response) => {
        // res.status(200).json(response);
        const responsedata = [];
        response.forEach((item) => {
          let mailContent = {
            from: mailtransporter.transporter.auth.user,
            to: item.email,
            subject: "Reg: NewsLetter",
            text: "Please find the NewsLetter.",
            html: `<h1>Please find the NewsLetter.</h1><h3> Below the NewsLetter Content. </h3><p>Name :${item.firstname} ${item.lastname}.</p><p> Thanking You,</p><p> With Regards, <br/>${mailtransporter.transporter.auth.user}`,
            attachments: req.body.files,
            //[
            //   {
            //     filename: "photo.jpg",
            //     path: req.files.image.path, // "C:/Users/sasikumar/Downloads/photo.jpg",
            //     // streamSource: fs.createReadStream(req.files.image.path)
            //   },
            // ],
          };

          mailtransporter.sendMail(mailContent, function (error, data) {
            if (error) {
              let maillogmaster = {};
              maillogmaster.email = item.email;
              maillogmaster.data = error;
              maillogmaster.status = "Error";
              dbmaillogmaster.create(maillogmaster, {
                attributes: ["id", "email", "data", "status"],
              });
            } else {
              let maillogmaster = {};
              maillogmaster.email = item.email;
              maillogmaster.data = data;
              maillogmaster.status = "Success";
              dbmaillogmaster.create(maillogmaster, {
                attributes: ["id", "email", "data", "status"],
              });
            }
          });
        });
        res.status(200).json({ message: "Mail Sent Success" });
      });
  } catch (error) {
    res.status(500).json({
      message: "Fail!",
      error: error.message,
    });
  }
};

exports.mailusers = (req, res) => {
  try {
    dbmailmaster
      .findAll({
        attributes: ["id", "firstname", "lastname", "email", "age"],
      })
      .then((response) => {
        res.status(200).json(response);
      });
  } catch (error) {
    // log on console
    console.log(error);

    res.status(500).json({
      message: "Error!",
      error: error,
    });
  }
};

exports.getmailuser = (req, res) => {
  dbmailmaster
    .findByPk(req.params.id, {
      attributes: ["id", "firstname", "lastname", "email", "age"],
    })
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((error) => {
      // log on console
      console.log(error);

      res.status(500).json({
        message: "Error!",
        error: error,
      });
    });
};
