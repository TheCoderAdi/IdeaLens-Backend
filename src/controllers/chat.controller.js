const { generateChatReply } = require("../services/chat.service");

const chatWithAgent = async (req, res) => {
    try {
        const { message } = req.body;

        if (!message) {
            return res.status(400).json({ error: "Invalid chat format." });
        }
        const reply = await generateChatReply(message);
        res.json({ reply });
    } catch (error) {
        console.error("Chat error:", error.message);
        res.status(500).json({ error: "Agent failed to reply." });
    }
};

module.exports = { chatWithAgent };
