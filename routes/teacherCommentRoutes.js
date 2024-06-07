// routes/commentRoutes.js
const express = require('express');
const commentController = require('../controllers/teacherCommentsController');
const router = express.Router();

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
