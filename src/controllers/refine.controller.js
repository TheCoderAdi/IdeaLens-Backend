const { generateRefinedSummary } = require("../services/refine.service");

const handleRefineRequest = async (req, res) => {
    const { originalSummary, userFeedback } = req.body;

    if (!originalSummary || !userFeedback) {
        return res.status(400).json({ error: "Missing original summary or user feedback." });
    }

    try {
        const refinedOutput = await generateRefinedSummary(originalSummary, userFeedback);
        res.json({ refined: refinedOutput });
    } catch (err) {
        console.error("Refine error:", err);
        res.status(500).json({ error: "Failed to refine summary." });
    }
};

module.exports = { handleRefineRequest };
