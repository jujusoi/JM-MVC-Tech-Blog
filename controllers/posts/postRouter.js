const post = require('express').Router();
const { User, Post, Comment } = require('../../models');

post.get('/:id', async (req, res) => {
    try {
    const postData = await Post.findByPk(req.params.id, {
        include: [{ model: User }, { model: Comment, include: User }],
    });
    if (!postData) {
        res.status(404).json(`Could not find post`);
    } else {
        const mappedPost = postData.get({ plain: true });
        console.log(mappedPost.comments);
        res.status(200).render('post', {
            mappedPost,
        })
    }
    } catch (err) {
        res.status(500).json(`Could not make request, ${err}`);
    }
});

module.exports = post;