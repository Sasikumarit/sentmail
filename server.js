const express = require("express");
const app = express();

var bodyParser = require("body-parser");

var http = require("http");
var passport = require("passport");
var cors = require("cors");

var bodyParser = require("body-parser");

global.__basedir = __dirname;

const db = require("./app/config/db.config.js");

const Mailmasterdb = db.Mailmasterdb;

let router = require("./app/routers/router.js");

var corsOptions = {
  origin: "*",
  allowedHeaders: [
    "Content-Type",
    "Authorization",
    "Accept",
    "x-reset-token",
    "x-invite-token",
    "x-api-key",
    "x-www-form-urlencoded",
  ],
  credentials: false,
};
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(passport.initialize());

app.use(express.static("resources"));
app.use("/", router);

// Create a Server
// http.createServer(app).listen(8080, function () {
//   console.log("App listening at http://%s:%s", 8080);
// });

const server = app.listen(8080, function () {
  let host = server.address().address;
  let port = server.address().port;

  console.log("App listening at http://%s:%s", host, port);
});

db.sequelize.sync().then(() => {
  console.log("Drop and Resync with { force: true }");
});
