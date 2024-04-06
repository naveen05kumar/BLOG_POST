// models/tagModel.js
const Sequelize = require('sequelize');
const db = require('../config/database');

const Tag = db.define('Tag', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

module.exports = Tag;
