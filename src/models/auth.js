const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

const authSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        select: false
    },
    chats:
        [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Chat'
        }],
    verifyToken: {
        type: String,
        default: null
    },
    verifyTokenExpiry: {
        type: Date,
        default: null
    },
}, {
    timestamps: true
})

authSchema.methods.generateToken = function () {
    return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
        expiresIn: "30d"
    })
}

const Auth = mongoose.model('Auth', authSchema);
module.exports = Auth;