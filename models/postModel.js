const db = require('../config/db-connection');

// const postSchema = new Schema({
//   title: {
//     type: String,
//     required: true,
//   },
//   content: {
//     type: String,
//     required: true,
//   },
//   author: {
//     type: String,
//     required: true,
//   },
//   comments: [
//     {
//       content: String,
//       author: String,
//     },
//   ],
// });

// // Create the Model that will control this collection
// const Post = model('Post', postSchema);

// module.exports = Post;


// models/post.js

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
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  // other post fields
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
