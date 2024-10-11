const express = require("express");
const emailRouter = express.Router();

const { SendEmailController } = require("../controller/EmailController");

emailRouter.post("/SendEmail", SendEmailController);

module.exports = emailRouter;