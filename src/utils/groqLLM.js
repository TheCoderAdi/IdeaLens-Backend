const axios = require("axios");

const GROQ_API_KEY = process.env.GROQ_API_KEY;
const GROQ_MODEL = "llama-3.3-70b-versatile";

const getGroqChatCompletion = async (messages) => {
    const response = await axios.post(
        "https://api.groq.com/openai/v1/chat/completions",
        {
            model: GROQ_MODEL,
            messages,
            temperature: 0.8,
        },
        {
            headers: {
                Authorization: `Bearer ${GROQ_API_KEY}`,
                "Content-Type": "application/json",
            },
        }
    );

    return response.data.choices[0].message.content;
};

module.exports = { getGroqChatCompletion };
