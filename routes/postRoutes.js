// routes/postRoutes.js
const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');

// GET all posts
router.get('/', postController.getAllPosts);

// GET a single post
router.get('/:id', postController.getPostById);

// POST a new post
router.post('/', postController.createPost);

// PATCH/PUT update a post
router.patch('/:id', postController.updatePost);

// DELETE a post
router.delete('/:id', postController.deletePost);

module.exports = router;
