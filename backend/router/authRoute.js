const express = require("express");
const authRouter = express.Router();
const jwtAuth = require("../middleware/jwtAuth.js");
const rateLimit = require("express-rate-limit");

const {
  signUp,
  signIn,
  forgotPassword,
  resetPassword,
  getUser,
  logout,
} = require("../controller/authController.js");

// Create a rate limiter for the /signin route
const signinLimiter = rateLimit({
  windowMs: 5 * 60 * 1000, // 5 minutes
  max: 5, // Limit each IP to 5 requests per windowMs
  message:
    "Too many login attempts from this IP, please try again after 5 minutes",
});

// Apply routes
authRouter.post("/signup", signUp);

// Apply the rate limiter to the signin route
authRouter.post("/signin", signinLimiter, signIn);

authRouter.get("/user", jwtAuth, getUser);
authRouter.get("/logout", jwtAuth, logout);

module.exports = authRouter;
