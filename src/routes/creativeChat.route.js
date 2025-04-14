const express = require("express");
const router = express.Router();
const { handleCreativeChat } = require("../controllers/creativeChat.controller");
const { isAuthenticated } = require("../services/auth.service");

router.post("/", isAuthenticated, handleCreativeChat);

module.exports = router;
