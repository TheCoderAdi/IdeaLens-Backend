const Auth = require("../models/auth")
const bcrypt = require("bcrypt");
const sendToken = require("../utils/sendToken");

const register = async (req, res) => {
    try {

        const { name, email, password } = req.body;

        if (!name || !email || !password) {
            return res.status(400).json({
                success: false,
                message: "Please fill all the fields"
            })
        }

        const userExists = await Auth.findOne({
            email
        })

        if (userExists) {
            return res.status(400).json({
                success: false,
                message: "User already exists"
            })
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const user = await Auth.create({
            email,
            name,
            password: hashedPassword
        })

        sendToken(user, res, `You have registered successfully, ${name}!`, 201);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: "Internal server error"
        })
    }
}

const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: "Please fill all the fields"
            })
        }

        const user = await Auth.findOne({
            email
        }).select("+password");

        if (!user) {
            return res.status(400).json({
                success: false,
                message: "Invalid credentials"
            })
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(400).json({
                success: false,
                message: "Invalid credentials"
            })
        }

        sendToken(user, res, `${user.name} logged in successfully`, 200);
    } catch (error) {
        return res.status(500).json
            ({
                success: false,
                message: "Internal server error"
            })
    }
}

const logout = async (req, res) => {
    try {
        return res.status(200).cookie('token', null, {
            expires: new Date(Date.now()),
            secure: process.env.NODE_ENV === "Development" ? false : true,
            httpOnly: process.env.NODE_ENV === "Development" ? false : true,
            sameSite: process.env.NODE_ENV === "Development" ? false : "none",
        }).json({
            success: true,
            message: "Logged out successfully"
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal server error"
        })
    }
}

const currentUser = async (req, res) => {
    try {
        const user = await Auth.findById(req.user);

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found"
            })
        }

        return res.status(200).json({
            success: true,
            user
        })

    } catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: "Internal server error"
        })
    }
}

module.exports = {
    register,
    login,
    logout,
    currentUser
}