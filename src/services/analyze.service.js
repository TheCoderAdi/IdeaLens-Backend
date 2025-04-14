const { askGroq } = require("../llm/groqClient");

const getContentStrategy = async (idea) => {
    const prompt = `
You are a social media content strategist.
Analyze this idea: "${idea}" and return:
1. Mood (e.g., emotional, hype, chill, romantic)
2. Genre (e.g., travel, fashion, tech, education)
3. Suggested platforms (e.g., TikTok, Reels, Shorts)
4. Content Hook
5. Short video direction (10s–30s)
  
Respond in JSON format like this:
{
    "mood": "mood",
    "genre": "genre",
    "platforms": ["platform1", "platform2"],
    "hook": "content hook",
    "direction": "short video direction in proper details",
    "duration" : "10s–30s"
}
`;

    const response = await askGroq(prompt);
    let cleanedResponse = response;
    if (response.includes('```')) {
        cleanedResponse = cleanedResponse.replace(/```/g, "");
    }
    if (response.includes('json')) {
        cleanedResponse = cleanedResponse.replace(/json/g, "");
    }
    return JSON.parse(cleanedResponse);
};

module.exports = { getContentStrategy };
