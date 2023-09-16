const newPost = require('express').Router();
const { User, Post } = require('../models');

newPost.get('/', async (req, res) => {
    try {
        res.status(200).render(`createpost`);
    } catch (err) {
        res.status(404).json(`Not found`);
    }
});

newPost.post('/', async (req, res) => {
    try {
        const newPost = await Post.create({
            post_title: req.body.post_title,
            post_description: req.body.post_description,
            user_id: req.session.user.user_id,
        });
        if (!newPost) {
            res.status(400).json({ message: `Could not post blog`});
            return;
        } else {
            res.status(200).json({ message: `Successfully posted blog!`});
        }
    } catch (err) {
        res.status(500).json(`Could not post new blog, ${err}`);
    }
})

module.exports = newPost;
