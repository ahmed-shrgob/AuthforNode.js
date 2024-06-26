const mongoose = require("mongoose");

const MessageSchema = new mongoose.Schema({
  conversationId: { type: String, ref: 'Conversation' },
  sender: { type: String, ref: 'User' },
  recipient: { type: String, ref: 'User' },
  text: String,
  createdAt: { type: Date, default: Date.now }
});

const Message = mongoose.model('Message', MessageSchema);

module.exports = Message;