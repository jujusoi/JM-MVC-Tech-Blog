const dashboard = require('express').Router();
const { User, Post } = require('../models');
const { loggedIn } = require('../config/middleware/auth');

dashboard.get('/', loggedIn, async (req, res) => {
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
            order: [
                [ 'id', 'DESC'],
            ],
        });
        console.log(userPosts);
        if (userPosts.length === 0) {
            res.status(200).render(`dashboard` , {
                userInfo: req.session.user, dashboardCheck: true,
            });
        } else {
            const mappedPost = userPosts.map((post) => post.get({ plain: true }));
            res.status(200).render(`dashboard`, {
                mappedPost, userInfo: req.session.user, dashboardCheck: true,
            });
        }
    } catch (err) {
        res.status(404).json(`Not found`);
    }
});

module.exports = dashboard;
