const { getContentStrategy } = require("./analyze.service");
const { getCaptionsAndHashtags } = require("./captions.service");
const { getSongRecommendations } = require("./songs.service");

const getFullCreativePackage = async (idea) => {
    const analysis = await getContentStrategy(idea);
    const captions = await getCaptionsAndHashtags(idea);
    const songs = await getSongRecommendations(idea);

    return {
        idea,
        ...analysis,
        captions: {
            emotional: captions.emotional,
            witty: captions.witty,
            trending: captions.trending
        },
        hashtags: captions.hashtags,
        songs
    };
};

module.exports = { getFullCreativePackage };
