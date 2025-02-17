const Comment = require('../models/commentModel');

const addComment = (req, res) => {
    const postId = req.params.id;
    const { user_id, content } = req.body;
    Comment.create(postId, user_id, content, (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(201).json({ message: 'Comment added successfully' });
    });
};

const getComments = (req, res) => {
    const postId = req.params.id;
    Comment.getByPostId(postId, (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(200).json(result);
    });
};

module.exports = { addComment, getComments };