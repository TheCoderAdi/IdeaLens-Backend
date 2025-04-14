const { getGroqChatCompletion } = require("../utils/groqLLM");

const generateRefinedSummary = async (originalSummary, userFeedback) => {
    const prompt = [
        {
            role: "system",
            content: `You are an AI creative director. Based on the original idea and feedback, return the refined idea as a raw JSON object — NOT a string. Do NOT wrap in quotation marks or markdown syntax. Return directly like this:

            {
            "title": "Midnight Enigmas",
            "concept": "...",
            "tone": "...",
            "visuals": ["...", "..."],
            "format": ["...", "..."],
            "exampleEpisodes": ["...", "..."]
            }`
        },
        {
            role: "user",
            content: `Original Content Idea:\n${originalSummary}`
        },
        {
            role: "user",
            content: `User Feedback:\n${userFeedback}`
        }
    ];

    const refined = await getGroqChatCompletion(prompt);
    return JSON.parse(refined);
};

module.exports = {
    generateRefinedSummary
};