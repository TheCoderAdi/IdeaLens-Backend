const express = require("express");
const router = express.Router();
const { chatWithAgent } = require("../controllers/chat.controller");

const { isAuthenticated } = require("../services/auth.service");

router.post("/", isAuthenticated, chatWithAgent);

module.exports = router;
