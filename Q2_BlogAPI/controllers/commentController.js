const Comment = require("../models/Comment");
const Post = require("../models/Post");
const User = require("../models/User");

// POST /api/posts/:postId/comments
exports.addComment = async (req, res) => {
  try {
    const { text, user } = req.body;
    const postExists = await Post.findById(req.params.postId);
    if (!postExists) {
      return res.status(404).json({
        success: false,
        message: "Post not found",
      });
    }
    const userExists = await User.findById(user);
    if (!userExists) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }
    const comment = await Comment.create({
      text,
      post: req.params.postId,
      user,
    });
    res.status(201).json({ success: true, data: comment });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

// GET /api/posts/:postId/comments
exports.getComments = async (req, res) => {
  try {
    const comments = await Comment.find({ post: req.params.postId }).populate(
      "user",
      "username email",
    );
    res.status(200).json({
      success: true,
      count: comments.length,
      data: comments,
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// DELETE /api/comments/:id
exports.deleteComment = async (req, res) => {
  try {
    const comment = await Comment.findByIdAndDelete(req.params.id);
    if (!comment) {
      return res.status(404).json({
        success: false,
        message: "Comment not found",
      });
    }
    res.status(200).json({
      success: true,
      message: "Comment deleted successfully",
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
