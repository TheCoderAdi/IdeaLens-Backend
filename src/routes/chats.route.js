const express = require("express")

const { isAuthenticated } = require("../services/auth.service");
const { getAllChats, getChatCount } = require("../controllers/chats.controller");

const router = express.Router();

router.get('/chats', isAuthenticated, getAllChats);
router.get('/count', isAuthenticated, getChatCount);

module.exports = router;