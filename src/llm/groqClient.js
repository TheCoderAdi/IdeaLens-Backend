const axios = require("axios");

const GROQ_API_URL = "https://api.groq.com/openai/v1/chat/completions";
const GROQ_API_KEY = process.env.GROQ_API_KEY;

const askGroq = async (prompt) => {
    try {
        const res = await axios.post(
            GROQ_API_URL,
            {
                model: "llama-3.3-70b-versatile",
                messages: [{ role: "user", content: prompt }],
                temperature: 0.7,
            },
            {
                headers: {
                    Authorization: `Bearer ${GROQ_API_KEY}`,
                    "Content-Type": "application/json",
                },
            }
        );

        return res.data.choices[0].message.content;
    } catch (error) {
        console.error("Groq API Error:", error.message);
        throw new Error("LLM request failed");
    }
};

module.exports = { askGroq };
