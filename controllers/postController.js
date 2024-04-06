const Post = require('../models/postModel');
const Tag = require('../models/tagModel');

// Function to create a new post
exports.createPost = async (req, res) => {
    try {
        const { title, content, tags } = req.body;
        const post = await Post.create({ title, content });
        if (tags && tags.length > 0) {
            await post.setTags(tags);
        }
        res.status(201).json({ success: true, post });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// Function to update an existing post
exports.updatePost = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, content, tags } = req.body;
        const post = await Post.findByPk(id);
        if (!post) {
            return res.status(404).json({ success: false, message: 'Post not found' });
        }
        post.title = title;
        post.content = content;
        await post.save();
        if (tags && tags.length > 0) {
            await post.setTags(tags);
        } else {
            await post.setTags([]);
        }
        res.status(200).json({ success: true, post });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// Function to delete a post
exports.deletePost = async (req, res) => {
    try {
        const { id } = req.params;
        const post = await Post.findByPk(id);
        if (!post) {
            return res.status(404).json({ success: false, message: 'Post not found' });
        }
        await post.destroy();
        res.status(200).json({ success: true, message: 'Post deleted successfully' });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};
