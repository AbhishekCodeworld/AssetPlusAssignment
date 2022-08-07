const Post = require("../../models/Post");
const postControllers =require("../../controllers/posts.js");
var router = require("express").Router();

// @AssetPlus: This is a sample get request
router.get("/", postControllers.getPosts);
router.post("/addPost", postControllers.addPost);

// @AssetPlus: Add other routes here
// router.post("/add")

module.exports = router;