const sendToken = async (user, res, message, statusCode) => {
    const token = await user.generateToken();

    res.status(statusCode).cookie('token', token, {
        secure: process.env.NODE_ENV === "Development" ? false : true,
        httpOnly: process.env.NODE_ENV === "Development" ? false : true,
        sameSite: process.env.NODE_ENV === "Development" ? false : "none",
        expires: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
    }).json({
        success: true,
        message,
        user,
        token,
    });
}

module.exports = sendToken;