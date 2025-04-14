const express = require("express");
const router = express.Router();
const { recommendSongs } = require("../controllers/songs.controller");
const { isAuthenticated } = require("../services/auth.service");

router.post("/", isAuthenticated, recommendSongs);

module.exports = router;
