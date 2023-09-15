const user = require('express').Router();
const { User, Post } = require('../../models');
const handlebars = require('handlebars');

handlebars.registerHelper('eq', function (a, b) {
    return a === b;
});

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
    const mainUser = req.session.username;
    console.log(mappedPost);
    res.render('user-posts', {
        mappedPost,
        mainUser,
    });
    } catch (err) {
        res.status(500).json(`Could not retrieve information`);
    }
});

module.exports = user;