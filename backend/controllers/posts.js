const Post = require('../models/Post.js');
exports.getPosts = async (req,res,next) => {
    try{
        const posts = await Post.find();
        return res.status(200).json(posts);
    }catch(err){
        console.log(err);
    }
    
};

exports.addPost = async (req,res,next) => {
    try{
        const title = req.body.title;
        const description = req.body.description;
        const poster = req.body.poster;
        const newPost = new Post({title,description,poster});
        await newPost.save();
        res.status(200).json(newPost);
        
    }catch(err)
    {
        console.log(err);
    }
};