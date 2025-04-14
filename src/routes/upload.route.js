const express = require("express");
const multer = require("multer");
const router = express.Router();
const { handleMediaUpload } = require("../controllers/upload.controller");
const { isAuthenticated } = require("../services/auth.service");

const upload = multer({ dest: "uploads/" });

router.post("/", isAuthenticated, upload.single("file"), handleMediaUpload);

module.exports = router;
