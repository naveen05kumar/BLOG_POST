// routes/tagRoutes.js
const express = require('express');
const router = express.Router();
const tagController = require('../controllers/tagController');

router.post('/tags', tagController.createTag);
router.put('/tags/:id', tagController.updateTag); // Route for updating a tag
router.delete('/tags/:id', tagController.deleteTag); // Route for deleting a tag

module.exports = router;
