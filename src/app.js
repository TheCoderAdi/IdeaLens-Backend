const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const analyzeRoutes = require("./routes/analyze.route");
const captionsRoutes = require("./routes/captions.route");
const songsRoutes = require("./routes/songs.route");
const summaryRoutes = require("./routes/summary.route");
const chatRoutes = require("./routes/chat.route")
const uploadRoutes = require("./routes/upload.route");
const refineRoutes = require("./routes/refine.route")
const creativeChatRoutes = require("./routes/creativeChat.route");
const liveChatRoutes = require("./routes/chats.route");
const authRoutes = require("./routes/auth.route");

const app = express();


app.use(cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser())

app.use("/api/analyze", analyzeRoutes);
app.use("/api/captions", captionsRoutes);
app.use("/api/songs", songsRoutes);
app.use("/api/summary", summaryRoutes);
app.use("/api/chat", chatRoutes);
app.use("/api/upload-media", uploadRoutes);
app.use("/api/refine", refineRoutes);
app.use("/api/creative-chat", creativeChatRoutes);
app.use('/api/live-chat', liveChatRoutes);
app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
    res.send("Creative Agent backend is up 🚀");
});

module.exports = app;
