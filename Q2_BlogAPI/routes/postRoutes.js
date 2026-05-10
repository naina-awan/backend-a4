const express = require("express");
const router = express.Router();
const {
  createPost,
  getAllPosts,
  getPostById,
  getPostsByTag,
  updatePost,
  deletePost,
} = require("../controllers/postController");
const { addComment, getComments } = require("../controllers/commentController");

// IMPORTANT: /tag/:tag must come BEFORE /:id
router.get("/tag/:tag", getPostsByTag);
router.get("/", getAllPosts);
router.get("/:id", getPostById);
router.post("/", createPost);
router.put("/:id", updatePost);
router.delete("/:id", deletePost);

// Comment routes
router.post("/:postId/comments", addComment);
router.get("/:postId/comments", getComments);

module.exports = router;
