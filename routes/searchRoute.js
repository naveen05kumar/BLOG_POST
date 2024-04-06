const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');

// Route for searching posts
router.get('/search', postController.searchPosts);

// Route for filtering posts
router.post('/filter', postController.filterPosts);

module.exports = router;
