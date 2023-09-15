const post = require('express').Router();
const { User, Post, Comment } = require('../../models');

post.get('/:id', async (req, res) => {
    try {
    const postData = await Post.findByPk(req.params.id, {
        include: [{ model: User, attributes: {
            exclude: ['password'],
        }}, { model: Comment, include: User, attributes: {
            exclude: ['password'],
        }}],
    });
    if (!postData) {
        res.status(404).json(`Could not find post`);
    } else {
        const mappedPost = postData.get({ plain: true });
        console.log(mappedPost);
        const user = req.session.user;
        res.status(200).render('post', {
            mappedPost,
            user,
        });
    }
    } catch (err) {
        res.status(500).json(`Could not make request, ${err}`);
    }
});

post.post('/:id', async (req, res) => {
    console.log(req.body);
    try {
        const newComment = await Comment.create({
            comment_description: req.body.comment_description,
            post_id: req.body.post_id,
            user_id: req.session.user.user_id,
    });
    if (!newComment) {
        res.status(400).json({ message: `Could not post comment`});
    } else {
        res.redirect(`/home/posts/${req.body.post_id}`);
    };
    } catch (err) {
        res.status(500).json(`Error in making post request, ${err}`);
    };
});

module.exports = post;