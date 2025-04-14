const { getCaptionsAndHashtags } = require("../services/captions.service");

const generateCaptions = async (req, res) => {
    try {
        const { idea } = req.body;

        if (!idea) {
            return res.status(400).json({ error: "Idea is required" });
        }

        const result = await getCaptionsAndHashtags(idea);
        res.json(result);
    } catch (error) {
        console.error("Captions Error:", error.message);
        res.status(500).json({ error: "Failed to generate captions" });
    }
};

module.exports = { generateCaptions };
