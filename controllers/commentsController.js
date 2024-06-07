// controllers/commentController.js
const Comment = require('../models/comment');

// GET all comments
const getAllComments = async (req, res) => {
  try {
    const comments = await Comment.find();
    res.json(comments);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// GET comments by post ID
const getCommentsByPostId = async (req, res) => {
  try {
    const comments = await Comment.find({ post: req.params.postId });
    res.json(comments);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// POST a new comment
const createComment = async (req, res) => {
  const comment = new Comment({
    content: req.body.content,
    post: req.body.post,
  });
  try {
    const newComment = await comment.save();
    res.status(201).json(newComment);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// PATCH/PUT update a comment
const updateComment = async (req, res) => {
  try {
    const comment = await Comment.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(comment);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// DELETE a comment
const deleteComment = async (req, res) => {
  try {
    await Comment.findByIdAndDelete(req.params.id);
    res.json({ message: 'Comment deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { getAllComments, getCommentsByPostId, createComment, updateComment, deleteComment };
