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
        const mainUser = req.session.username;
        const userId = req.session.user_id;
        res.status(200).render('post', {
            mappedPost,
            mainUser,
            userId,
        });
    }
    } catch (err) {
        res.status(500).json(`Could not make request, ${err}`);
    }
});

module.exports = post;