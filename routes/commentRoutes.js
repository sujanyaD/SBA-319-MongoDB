// routes/commentRoutes.js
const express = require('express');
const router = express.Router();
const commentController = require('../controllers/commentController');

// GET all comments
router.get('/', commentController.getAllComments);

// GET comments by post ID
router.get('/post/:postId', commentController.getCommentsByPostId);

// POST a new comment
router.post('/', commentController.createComment);

// PATCH/PUT update a comment
router.patch('/:id', commentController.updateComment);

// DELETE a comment
router.delete('/:id', commentController.deleteComment);

module.exports = router;
