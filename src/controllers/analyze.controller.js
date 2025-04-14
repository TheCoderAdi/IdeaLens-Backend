const { getContentStrategy } = require("../services/analyze.service");

const analyzeIdea = async (req, res) => {
    try {
        const { idea } = req.body;

        if (!idea) {
            return res.status(400).json({ error: "Idea is required" });
        }

        const strategy = await getContentStrategy(idea);
        res.json(strategy);
    } catch (error) {
        console.error("Analyze Error:", error.message);
        res.status(500).json({ error: "Failed to analyze idea" });
    }
};

module.exports = { analyzeIdea };
