// models/comment.js
const db = require('../config/db-connection');

const commentSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true,
    trim: true,
  },
  post: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Post',
    required: true,
  },
  // other comment fields
});

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;
