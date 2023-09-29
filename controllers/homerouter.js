const home = require('express').Router();
const { User, Post } = require('../models');
const postRoute = require('./posts');
const userRoute = require('./users');
const { loggedIn } = require('../config/middleware/auth');

home.get('/',  async (req, res) => {
    try {
        const postData = await Post.findAll({
            include: [{ model: User, attributes: {
                exclude: ['password'],
            }}],
            order: [
                [ 'id', 'DESC'],
            ],
        });
        const mappedPost = postData.map((post) => post.get({ plain: true }));
        res.status(200).render(`homepage`, {
            mappedPost, userInfo: req.session.user,
        });
    } catch (err) {
        res.status(404).json(`Not found`);
    }
});

home.use('/posts', loggedIn, postRoute);
home.use('/users', loggedIn, userRoute);

module.exports = home;
