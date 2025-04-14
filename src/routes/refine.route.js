const express = require("express");
const router = express.Router();
const { handleRefineRequest } = require("../controllers/refine.controller");
const { isAuthenticated } = require("../services/auth.service");

router.post("/", isAuthenticated, handleRefineRequest);

module.exports = router;
