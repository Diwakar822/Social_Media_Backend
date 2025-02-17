const db = require('../config/db');

const Comment = {
    create: (postId, userId, content, callback) => {
        const query = 'INSERT INTO comments (post_id, user_id, content) VALUES (?, ?, ?)';
        db.query(query, [postId, userId, content], callback);
    },
    getByPostId: (postId, callback) => {
        const query = `
            SELECT comments.*, users.username 
            FROM comments 
            JOIN users ON comments.user_id = users.id 
            WHERE comments.post_id = ? 
            ORDER BY comments.created_at DESC`;
        db.query(query, [postId], callback);
    }
};

module.exports = Comment;