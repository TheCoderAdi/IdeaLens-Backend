const fs = require("fs");
const { exec } = require("child_process");
const { getGroqChatCompletion } = require("../utils/groqLLM");

const whisperTranscribe = (filePath) => {
    return new Promise((resolve, reject) => {
        exec(`whisper "${filePath}" --model base --language English --output_format txt --output_dir uploads`, (error, stdout, stderr) => {
            if (error) {
                return reject(error);
            }
            const txtPath = `${filePath}.txt`;
            fs.readFile(txtPath, "utf8", (err, data) => {
                if (err) return reject(err);
                resolve(data.trim());
            });
        });
    });
};

const processMediaFile = async (filePath, mimetype) => {
    let transcription = "";

    if (mimetype.startsWith("audio") || mimetype.startsWith("video")) {
        transcription = await whisperTranscribe(filePath);
    }

    const prompt = [
        {
            role: "system",
            content: "You are an AI creative director. Given a short video/audio transcription, extract its mood and generate a short-form content idea."
        },
        {
            role: "user",
            content: `Transcription:\n"${transcription}"`
        }
    ];

    const summary = await getGroqChatCompletion(prompt);

    // cleanup
    fs.unlinkSync(filePath);

    return {
        transcription,
        summary,
    };
};

module.exports = { processMediaFile };
