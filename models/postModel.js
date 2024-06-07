const db = require('../config/db-connection');

const postSchema = new db.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  content: {
    type: String,
    required: true,
    trim: true,
  },
  author: {
    type: db.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  // other post fields
});

const Post = db.model('Post', postSchema);

module.exports = Post;
