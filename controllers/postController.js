const Post = require('../models/postModel');

const getAllPosts = (req, res) => {
    Post.getAll((err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(200).json(result);
    });
};

const createPost = (req, res) => {
    const { user_id, content, image_url } = req.body;
    Post.create(user_id, content, image_url, (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(201).json({ message: 'Post created successfully', postId: result.insertId });
    });
};

const likePost = (req, res) => {
    const postId = req.params.id;
    Post.like(postId, (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(200).json({ message: 'Post liked successfully' });
    });
};

module.exports = { getAllPosts, createPost, likePost };