const home = require('express').Router();
const { User, Post } = require('../models');

home.get('/',  async (req, res) => {
    try {
        const postData = await Post.findAll({
            include: [{ model: User }],
            order: [
                [ 'id', 'DESC'],
            ],
        });
        const mappedPost = postData.map((post) => post.get({ plain: true }));
        console.log(mappedPost);
        res.status(200).render(`homepage`, {
            mappedPost
        });
    } catch (err) {
        res.status(404).json(`Not found`);
    }
});

module.exports = home;
