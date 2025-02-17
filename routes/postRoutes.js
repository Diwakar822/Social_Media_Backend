const express = require('express');
const { getAllPosts, createPost, likePost } = require('../controllers/postController');

const router = express.Router();

router.get('/', getAllPosts);
router.post('/', createPost);
router.put('/:id/like', likePost);

module.exports = router;