const newPost = require('express').Router();

newPost.get('/', async (req, res) => {
    try {
        res.status(200).render(`createpost`);
    } catch (err) {
        res.status(404).json(`Not found`);
    }
});

module.exports = newPost;
