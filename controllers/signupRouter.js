const sign = require('express').Router();
const { User } = require('../models');

sign.get('/',  async (req, res) => {
    try {
        res.status(200).render(`signup`);
    } catch (err) {
        res.status(404).json(`Not found`);
    }
});

sign.post('/', async (req, res) => {
    try {
    const userData = await User.create(req.body);
    if (!userData) {
        res.status(404).json({ message: `Could not create new user`});
        return;
    } else {
        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.logged_in = true;
            req.session.username = userData.username;
            res.status(200).json({ message: `Successfully logged in!`});
        });
    };
    } catch (err) {
        res.status(500).json(`Could not post data, ${err}`);
    }
});

module.exports = sign;
