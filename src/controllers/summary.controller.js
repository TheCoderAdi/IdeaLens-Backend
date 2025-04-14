const { getFullCreativePackage } = require("../services/summary.service");

const generateFullSummary = async (req, res) => {
    try {
        const { idea } = req.body;

        if (!idea) {
            return res.status(400).json({ error: "Idea is required" });
        }

        const summary = await getFullCreativePackage(idea);
        res.json(summary);
    } catch (error) {
        console.log(error)
        console.error("Summary Error:", error.message);
        res.status(500).json({ error: "Failed to generate creative summary" });
    }
};

module.exports = { generateFullSummary };
