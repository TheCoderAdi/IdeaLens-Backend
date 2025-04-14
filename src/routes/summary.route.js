const express = require("express");
const router = express.Router();
const { generateFullSummary } = require("../controllers/summary.controller");
const { isAuthenticated } = require("../services/auth.service");

router.post("/", isAuthenticated, generateFullSummary);

module.exports = router;
