const express = require("express");

const router = express.Router();
const authController = require("../controllers/auth.controller");

const { body } = require("express-validator");

const validateUser = [
  body("name").not().isEmpty().withMessage("Name is required."),
  body("email").isEmail().withMessage("Please enter a valid email adress."),
  body("password")
    .isLength({ min: 8 })
    .withMessage("Password must be at least 8 characters.")
    .isStrongPassword()
    .withMessage(
      "Password must contains at least one uppercase, one lowercase and one symbol."
    ),
  body("phone")
    .isMobilePhone()
    .withMessage("Please enter a valid phone number."),
];

router.post("/login", authController.login);

router.post("/register", validateUser, authController.register);

router.post("/forgot-password", authController.forgotPassword);

router.post("/verify-otp", authController.verifyPasswordResetOtp);

router.post("reset-password", authController.resetPassword);

module.exports = router;
