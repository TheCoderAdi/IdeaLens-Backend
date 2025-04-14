const { askGroq } = require("../llm/groqClient");

const getCaptionsAndHashtags = async (idea) => {
  const prompt = `
You're a viral content copywriter.

Given this idea: "${idea}", generate:
1. An emotional caption
2. A witty caption
3. A caption using current slang or trending tone
4. A list of 7-10 relevant hashtags based on mood, genre, and platforms

Respond in this JSON format:
{
  "emotional": "...",
  "witty": "...",
  "trending": "...",
  "hashtags": ["#", "#", ...]
}
`;

  const response = await askGroq(prompt);
  let cleanedResponse = response.replace(/```/g, "");
  return JSON.parse(cleanedResponse);
};

module.exports = { getCaptionsAndHashtags };
