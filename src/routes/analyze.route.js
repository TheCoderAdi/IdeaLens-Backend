const express = require("express");
const router = express.Router();
const { analyzeIdea } = require("../controllers/analyze.controller");
const { isAuthenticated } = require("../services/auth.service");

router.post("/", isAuthenticated, analyzeIdea);

module.exports = router;
