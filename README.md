Social Media Feed Backend
This is the backend for a Social Media Feed application.
It provides APIs for user registration, login, creating posts, liking posts, and adding comments.
The backend is built using Node.js, Express.js, and MySQL.

Features
>> User Authentication:

Register new users.

Login with username and password.

>> Posts:

Create new posts with text and optional images.

Fetch all posts in a feed.

Like/unlike posts.

>> Comments:

Add comments to posts.

Fetch comments for a specific post.

>> Database:

Persistent storage using MySQL.

Tables for users, posts, and comments.


>> Technologies Used

1. Backend: Node.js, Express.js

2. Database: MySQL

3. API Testing: Postman, cURL

4. Dependencies:

5. express: Web framework for Node.js.

6. mysql2: MySQL client for Node.js.

7. cors: Middleware to enable CORS.

8. body-parser: Middleware to parse request bodies.

>> Setup Instructions

1. Prerequisites
   
>> Node.js: Install from nodejs.org.

>> MySQL: Install from MySQL Downloads.

>> Git: Install from git-scm.com.

>> created Database for this project:
CREATE DATABASE social_media;
USE social_media;

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE posts (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    content TEXT,
    image_url VARCHAR(255),
    likes INT DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE comments (
    id INT AUTO_INCREMENT PRIMARY KEY,
    post_id INT,
    user_id INT,
    content TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (post_id) REFERENCES posts(id),
    FOREIGN KEY (user_id) REFERENCES users(id)
);
