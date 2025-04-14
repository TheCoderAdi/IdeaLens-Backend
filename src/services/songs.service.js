const { askGroq } = require("../llm/groqClient");

const getSongRecommendations = async (idea) => {
  const prompt = `
You're a music recommendation engine for social media content.

Given this idea: "${idea}", suggest 3-5 trending or fitting songs.
For each song, include:
1. Song title and artist
2. Why it fits (vibe, lyrics, energy)
3. Recommended platforms (TikTok, Reels, Shorts)

Respond in this JSON format:
[
  {
    "title": "",
    "artist": "",
    "reason": "",
    "platforms": []
  },
  ...
]
`;

  const response = await askGroq(prompt);
  let cleanedResponse = response.replace(/```/g, "");
  return JSON.parse(cleanedResponse);
};

module.exports = { getSongRecommendations };
