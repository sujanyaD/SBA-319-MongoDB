// models/comment.js
// const db = require('../config/db-connection');
const { Schema,model } = require('../config/db-connection');


const commentSchema = new Schema({
 comment: {
    type: String,
   required: true,
  }
  
  // other comment fields
});

// const Comment = db.model('Comment', commentSchema);
module.exports=model('teacherCommentsModel',commentSchema);

// module.exports = Comment;
