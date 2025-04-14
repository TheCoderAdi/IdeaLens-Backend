const { getGroqChatCompletion } = require("../utils/groqLLM");


const chatWithCreativeAgent = async (messages, chats) => {
    const systemPrompt = {
        role: "system",
        content: `
You are an AI Creative Director for short-form content. 
You help creators plan viral videos by suggesting:
You are an AI Creative Director for short-form content.
You help creators plan viral videos by suggesting:
Your previous replies are:
${chats.map(chat => chat.messages.botReply).join("\n")}
user quries are:
${chats.map(chat => chat.messages.userMessage).join("\n")}
You send these topics as readme with proper headings and subheadings and bullet points :

- Mood
- Platforms
- Video ideas
- Hooks
- Captions (witty, emotional, trending)
- Hashtags
- Background songs (with reasons)

You're helpful, playful, and concise. Suggest creative ideas and always ask questions to refine vision if needed.
`
    };
    const fullChat = [systemPrompt, ...messages];
    const reply = await getGroqChatCompletion(fullChat);
    return reply;
};

module.exports = { chatWithCreativeAgent };
