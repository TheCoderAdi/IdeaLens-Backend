const { processMediaFile } = require("../services/upload.service");

const handleMediaUpload = async (req, res) => {
    try {
        const file = req.file;

        if (!file) {
            return res.status(400).json({ error: "No media file uploaded." });
        }

        const result = await processMediaFile(file.path, file.mimetype);
        res.json(result);
    } catch (error) {
        console.log(error)
        console.error("Upload error:", error.message);
        res.status(500).json({ error: "Media processing failed." });
    }
};

module.exports = { handleMediaUpload };
