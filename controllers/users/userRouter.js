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
            order: [
                [ 'id', 'DESC'],
            ],
        });
        if (userPosts.length == 0) {
            const onlyUser = await User.findOne({
                where: {
                    id: req.params.id,
                },
                attributes: {
                    exclude: [ 'password' ],
                },
            });
            const noUser = onlyUser.get({ plain: true });
            res.render('user-posts', {
                noUser,
                userInfo: req.session.user,
            });
        } else {
            const mappedPost = userPosts.map((post) => post.get({ plain: true }));
            res.render('user-posts', {
                mappedPost,
                userInfo: req.session.user,
            });
        }
    } catch (err) {
        res.status(500).json(`Could not retrieve information`);
    }
});

module.exports = user;