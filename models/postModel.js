// models/postModel.js
const Sequelize = require('sequelize');
const db = require('../config/database');
const Tag = require('./tagModel');

// Define your existing Post model
const Post = db.define('Post', {
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    content: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    // Add other fields as per your existing Post model definition
    // For example:
    publishedAt: {
        type: Sequelize.DATE,
        allowNull: false
    },
    authorId: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
});

// Define many-to-many relationship between Post and Tag
Post.belongsToMany(Tag, { through: 'PostTag' }); // Define association from Post to Tag
Tag.belongsToMany(Post, { through: 'PostTag' }); // Define association from Tag to Post

module.exports = Post;
