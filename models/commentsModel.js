// models/comment.js
const db = require('../config/db-connection');

const commentSchema = new db.Schema({
  content: {
    type: String,
    required: true,
    trim: true,
  },
  post: {
    type: db.Schema.Types.ObjectId,
    ref: 'Post',
    required: true,
  },
  // other comment fields
});

const Comment = db.model('Comment', commentSchema);

module.exports = Comment;
