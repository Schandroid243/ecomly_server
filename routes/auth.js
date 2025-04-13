const express = require("express");

const router = express.Router();

router.post("/login", (req, res) => {});

router.post("/register", () => {});

router.post("/forgot-password", () => {});

router.post("/verify-otp", () => {});

router.post("reset-password", () => {});

module.exports = router;
