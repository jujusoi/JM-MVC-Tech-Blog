const dashboard = require('express').Router();
const { User, Post } = require('../models');

dashboard.get('/',  async (req, res) => {
    try {
        const userPosts = await Post.findAll({
            where: {
                user_id: req.session.user.user_id,
            },
            include: {
                model: User, attributes: {
                    exclude: [ 'password' ],
                },
            },
        });
        console.log(userPosts);
        if (userPosts.length === 0) {
            res.status(200).render(`dashboard`);
        } else {
            const mappedPost = userPosts.map((post) => post.get({ plain: true }));
            res.status(200).render(`dashboard`, {
                mappedPost,
            });
        }
    } catch (err) {
        res.status(404).json(`Not found`);
    }
});

module.exports = dashboard;
