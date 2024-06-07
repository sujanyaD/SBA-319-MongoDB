// models/comment.js
const db = require('../config/db-connection');

const commentSchema = new db.Schema({
 comment: {
    type: String,
    
  },
  post: {
    type: db.Schema.Types.ObjectId,
   
  },
  // other comment fields
});

const Comment = db.model('Comment', commentSchema);

module.exports = Comment;
