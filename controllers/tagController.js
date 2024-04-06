const Tag = require('../models/tagModel');
const Post = require('../models/postModel');

// Function to create a new tag
exports.createTag = async (req, res) => {
    try {
        const { name } = req.body;
        const tag = await Tag.create({ name });
        res.status(201).json({ success: true, tag });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// Function to update an existing tag
exports.updateTag = async (req, res) => {
    try {
        const { id } = req.params;
        const { name } = req.body;
        const tag = await Tag.findByPk(id);
        if (!tag) {
            return res.status(404).json({ success: false, message: 'Tag not found' });
        }
        tag.name = name;
        await tag.save();
        res.status(200).json({ success: true, tag });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// Function to delete a tag
exports.deleteTag = async (req, res) => {
    try {
        const { id } = req.params;
        const tag = await Tag.findByPk(id);
        if (!tag) {
            return res.status(404).json({ success: false, message: 'Tag not found' });
        }
        await tag.destroy();
        res.status(200).json({ success: true, message: 'Tag deleted successfully' });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// Function to assign tags to a post
exports.assignTagsToPost = async (req, res) => {
    try {
        const { postId, tagIds } = req.body;
        const post = await Post.findByPk(postId);
        if (!post) {
            return res.status(404).json({ success: false, message: 'Post not found' });
        }
        await post.setTags(tagIds);
        res.status(200).json({ success: true, message: 'Tags assigned to post successfully' });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// Function to remove tags from a post
exports.removeTagsFromPost = async (req, res) => {
    try {
        const { postId, tagIds } = req.body;
        const post = await Post.findByPk(postId);
        if (!post) {
            return res.status(404).json({ success: false, message: 'Post not found' });
        }
        await post.removeTags(tagIds);
        res.status(200).json({ success: true, message: 'Tags removed from post successfully' });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};
