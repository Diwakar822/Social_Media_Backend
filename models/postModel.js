const db = require('../config/db');

const Post = {
    getAll: (callback) => {
        const query = `
            SELECT posts.*, users.username 
            FROM posts 
            JOIN users ON posts.user_id = users.id 
            ORDER BY posts.created_at DESC`;
        db.query(query, callback);
    },
    create: (userId, content, imageUrl, callback) => {
        const query = 'INSERT INTO posts (user_id, content, image_url) VALUES (?, ?, ?)';
        db.query(query, [userId, content, imageUrl], callback);
    },
    like: (postId, callback) => {
        const query = 'UPDATE posts SET likes = likes + 1 WHERE id = ?';
        db.query(query, [postId], callback);
    }
};

module.exports = Post;