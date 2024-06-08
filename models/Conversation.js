const mongoose = require("mongoose");

const ConversationSchema = new mongoose.Schema({
  participants: [{ type: String, ref: 'User' }],
  lastMessage: {
    text: String,
    createdAt: Date,
    sender: { type: String, ref: 'User' }
  },
  senderNeme: String,
  senderImage: String,
}, {
  timestamps: true
});


const Conversation = mongoose.model('Conversation', ConversationSchema);

module.exports = Conversation;
