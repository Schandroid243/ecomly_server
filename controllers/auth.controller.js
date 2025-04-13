const { validationResult } = require("express-validator");
const { User } = require("../models/user");

exports.register = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const errorMessages = errors.array().map((error) => ({
      field: error.path,
      message: error.msg,
    }));
    return res.status(400).json({ errors: errorMessages });
  }

  try {
    let user = new User(req.body);
  } catch (error) {
    return res.status(500).json({ ype: error.name, message: error.message });
  }
};
exports.login = async (req, res) => {};
exports.forgotPassword = async (req, res) => {};
exports.verifyPasswordResetOtp = async (req, res) => {};
exports.resetPassword = async (req, res) => {};
