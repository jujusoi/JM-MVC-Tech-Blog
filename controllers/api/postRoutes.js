const postRoute = require('express').Router();
const { User, Post, Comment } = require('../../models/');

postRoute.get('/:id', async (req, res) => {
    try {
        const postData = await Post.findByPk(req.params.id, {
            include: [{ model: User }, { model: Comment }],
        });
        res.status(200).json(postData);
    } catch (err) {
        res.status(500).json(`Could not retrieve data`);
    }
});

module.exports = postRoute;