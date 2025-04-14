const express = require("express");
const router = express.Router();
const { generateCaptions } = require("../controllers/captions.controller");
const { isAuthenticated } = require("../services/auth.service");

router.post("/", isAuthenticated, generateCaptions);

module.exports = router;
