const mongoose = require('mongoose');

const chatSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Auth',
        required: true
    },
    messages:
    {
        userMessage: {
            type: String,
            required: true
        },
        botReply: {
            type: String,
            required: true
        },
    }
}, {
    timestamps: true
})

const Chat = mongoose.model('Chat', chatSchema);
module.exports = Chat;