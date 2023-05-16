const Post = require("../models/Post");
const User = require("../models/user");

// SHOW ALL POSTS
exports.getAllPosts = async (req, res) => {
    try {
        // const followingTemp = await User
        //     .findById(req.user.id)
        //     .select("following");
        // const following = followingTemp.following;
        // const followingPosts = await Post.find({ user: { $in: following } })
        //     .populate("user", "first_name last_name picture username cover")
        //     .populate("comments.commentBy", "first_name last_name picture username")
        //     .sort({ createdAt: -1 })
        // const userPosts = await Post
        //     .find({ user: req.user.id })
        //     .populate("user", "first_name last_name picture username cover")
        //     .populate("comments.commentBy", "first_name last_name picture username")
        //     .sort({ createdAt: -1 })
        //     .limit(10);
        const posts = await Post
            .find()
            .populate("user", "first_name last_name picture cover username gender")
            .populate("comments.commentBy", "first_name last_name picture username commentAt")
            .sort({ createdAt: -1 })
        // followingPosts.push(...[...userPosts]);
        // followingPosts.sort((a, b) => {
        //     return b.createdAt - a.createdAt;
        // });
        // res.json(followingPosts);
        res.json(posts);
    }
    catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

// CREATE POST
exports.createPost = async (req, res) => {
    try {
        const post = await new Post(req.body).save();
        await post.populate("user", "first_name last_name picture username cover");
        res.json(post);
    }
    catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

// COMMENT
exports.comment = async (req, res) => {
    try {
        const { comment, image, postId } = req.body;
        let newComments = await Post.findByIdAndUpdate(postId, {
            $push: {
                comments: {
                    comment: comment,
                    image: image,
                    commentBy: req.user.id,
                    commentAt: new Date(),
                }
            }
        }, {
            new: true,
        }).populate("comments.commentBy", "picture first_name last_name username");
        res.json(newComments.comments);
    }
    catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

// SAVE POST
exports.savePost = async (req, res) => {
    try {
        const postId = req.params.id;
        const user = await User.findById(req.user.id);
        const check = user?.savedPosts.find((post) => post.post.toString() === postId);

        if (check) {
            await User.findByIdAndUpdate(req.user.id, {
                $pull: {
                    savedPosts: {
                        _id: check._id,
                    }
                }
            });
        }
        else {
            await User.findByIdAndUpdate(req.user.id, {
                $push: {
                    savedPosts: {
                        post: postId,
                        savedAt: new Date(),
                    }
                }
            });
        }
    }
    catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

// DELETE POST
exports.deletePost = async (req, res) => {
    try {
        await Post.findByIdAndRemove(req.params.id);
        res.json({ status: "ok" });
    }
    catch (error) {
        return res.status(500).json({ message: error.message });
    }
};