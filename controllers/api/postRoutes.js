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

postRoute.put('/:id', async (req, res) => {
    try {
        const postUpdate = await Post.findByPk(req.params.id);
        postUpdate.set({
            post_title: req.body.post_title,
            post_description: req.body.post_description,
        });
        postUpdate.save();
        res.status(200).json(`Post updated`);
    } catch (err) {
        res.status(500).json(`Could not make update request, ${err}`);
    }
});

postRoute.delete('/:id', async (req, res) => {
    try {
        const deletedData = await Post.destroy({
            where: {
                id: req.params.id,
                user_id: req.session.user.user_id,
            },
        });
        res.status(200).json(`Post deleted`);
    } catch (err) {
        res.status(500).json(`Could not make delete request, ${err}`);
    }
});

module.exports = postRoute;