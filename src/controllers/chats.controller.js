const Chat = require("../models/chat");

const getAllChats = async (req, res) => {
    try {
        const chats = await Chat.find({
            user: req.user
        })

        if (chats.length === 0) {
            return res.status(404).json({ success: false, message: "No chats found" });
        }

        return res.status(200).json({ success: true, chats });
    } catch (error) {
        res.status(500).json({ success: false, message: "Error while fetching chats" });
    }
}

const getChatCount = async (req, res) => {
    try {

        const chatCount = await Chat.countDocuments({ user: req.user });

        return res.status(200).json({ success: true, chatCount });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error while fetching chats"
        })
    }
}

module.exports = {
    getAllChats,
    getChatCount
}