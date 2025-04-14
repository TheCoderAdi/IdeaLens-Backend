const express = require("express");

const {
    login,
    register,
    logout,
    currentUser
} = require("../controllers/auth.controller")

const { isAuthenticated } = require("../services/auth.service")

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/current-user', isAuthenticated, currentUser);
router.get('/logout', isAuthenticated, logout);

module.exports = router;