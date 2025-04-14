const jwt = require("jsonwebtoken")

const isAuthenticated = (req, res, next) => {
    const { token } = req.cookies;

    if (!token) {
        return res.status(401).json({
            success: false,
            message: "Please login to access this resource"
        })
    }

    const decoded = jwt.decode(token, process.env.JWT_SECRET);
    req.user = decoded.id;
    next();
}

module.exports = {
    isAuthenticated
}