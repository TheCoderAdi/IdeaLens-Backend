const { chatWithCreativeAgent } = require("../services/creativeChat.service");
const Chat = require("../models/chat")

const handleCreativeChat = async (req, res) => {
    const { messages } = req.body;

    if (!messages || !Array.isArray(messages)) {
        return res.status(400).json({ error: "Missing or invalid messages array." });
    }

    try {
        const chats = await Chat.find({ user: req.user }).sort({ createdAt: -1 }).limit(3);
        const reply = await chatWithCreativeAgent(messages, chats);
        const message = {
            userMessage: messages[0].content,
            botReply: reply,
        }
        await Chat.create({
            user: req.user,
            messages: message
        })
        res.json({ reply });
    } catch (err) {
        console.error("Creative Chat Error:", err);
        res.status(500).json({ error: "Failed to process chat." });
    }
};

module.exports = { handleCreativeChat };
