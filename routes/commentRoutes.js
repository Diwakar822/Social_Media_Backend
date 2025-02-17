const express = require('express');
const { addComment, getComments } = require('../controllers/commentController');

const router = express.Router();

router.post('/:id/comments', addComment);
router.get('/:id/comments', getComments);

module.exports = router;