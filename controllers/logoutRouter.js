const logout = require('express').Router();
const { User } = require('../models');

logout.post('/', async (req, res) => {
    try {
        const userData = await User.findOne({
            where: {
                id: req.session.user.user_id,
                username: req.session.user.username,
            }, attributes: {
                exclude: [`password`],
            }
        });
        if (!userData) {
            res.status(400).json({ message: `User not found`});
            return;
        } else {
            req.session.destroy(() => {
                res.status(204).end();
            });
        };
    } catch (err) {
        res.status(500).json(`Could not post information, ${err}`);
    }
});

module.exports = logout;