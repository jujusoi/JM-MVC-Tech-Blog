const userRoute = require('express').Router();
const { User, Post, Comment } = require('../../models/');

userRoute.get('/:id', async (req, res) => {
    try {
        const userData = await User.findByPk(req.params.id, {
            include: [{ model: Post }, { model: Comment }],
        });
        res.status(200).json(userData);
    } catch (err) {
        res.status(500).json(`Could not retrieve data`);
    }
});

module.exports = userRoute;