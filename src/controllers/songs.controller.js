const { getSongRecommendations } = require("../services/songs.service");

const recommendSongs = async (req, res) => {
    try {
        const { idea } = req.body;

        if (!idea) {
            return res.status(400).json({ error: "Idea is required" });
        }

        const songs = await getSongRecommendations(idea);
        res.json(songs);
    } catch (error) {
        console.error("Songs Error:", error.message);
        res.status(500).json({ error: "Failed to fetch song recommendations" });
    }
};

module.exports = { recommendSongs };
