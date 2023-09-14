const user = require('express').Router();
const { User, Post } = require('../../models');

user.get('/:id', async (req, res) => {
    try {
        const userPosts = await Post.findAll({
            where: {
                user_id: req.params.id,
            },
            include: [{
                model: User,
            }],
        });
    const mappedPost = userPosts.map((post) => post.get({ plain: true }));
    
    console.log(mappedPost);
    res.render('user-posts', {
        mappedPost,
    });
    } catch (err) {
        res.status(500).json(`Could not retrieve information`);
    }
});

module.exports = user;