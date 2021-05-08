let express = require("express");
let router = express.Router();

const mailController = require("../controllers/controller.js");

router.post("/api/user", mailController.createmailusermaster);
router.get("/api/user/:id", mailController.getmailuser);
router.get("/api/users", mailController.mailusers);
router.post("/api/sentmail", mailController.sentmail);

module.exports = router;
