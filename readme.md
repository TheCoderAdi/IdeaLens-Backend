# IdeaLens — Backend

This is the backend API powering IdeaLens — a creative AI assistant. It’s built using **Node.js**, **Express.js**, and **MongoDB**, with endpoints for summary generation, captioning, uploading, chatting, and user authentication.

## 📦 Features

- ✅ User authentication with JWT
- 💡 Summary generation with mood, genre, platforms, and hooks
- 📝 Caption, hashtag, and music recommendation routes
- 🧠 Chat system with creative memory
- 🗂️ Save & retrieve user ideas
- 🎙️ Audio/video upload analysis

## 🔧 Tech Stack

- **Framework:** Node.js + Express
- **Database:** MongoDB + Mongoose
- **Auth:** JWT-based custom authentication
- **LLM Integration:** Groq (LLaMA3) or other free open-source LLMs
- **File Upload:** multer or file-based middleware

## 📚 Available API Routes

| Route                | Method | Description                           |
| -------------------- | ------ | ------------------------------------- |
| `/api/auth/register` | POST   | Register new user                     |
| `/api/auth/login`    | POST   | Login existing user                   |
| `/api/summary`       | POST   | Generate creative summary for an idea |
| `/api/captions`      | POST   | Get captions and hashtags             |
| `/api/refine`        | POST   | Refine the content based on feedback  |
| `/api/upload`        | POST   | Analyze uploaded audio/video          |
| `/api/chat`          | POST   | General creative assistant chat       |
| `/api/live-chat/`    | POST   | Chat + store in DB                    |
| `/api/creative-chat` | GET    | Fetch user chats                      |

## 🧪 Setup Instructions

1. Clone the repo:

   ```bash
   git clone https://github.com/thecoderadi/IdeaLens-Backend.git
   cd IdeaLens-Backend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create `.env` file:
   ```
    GROQ_API_KEY=your-api-key
    MONGODB_URI=mongodb://localhost:27017/quest25
    JWT_SECRET=your-secret
    CLIENT_URL=http://localhost:3000
    NODE_ENV=Development
   ```
4. Run the server:
   ```bash
   npm run dev
   ```
