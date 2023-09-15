const login = require('express').Router();
const { User } = require('../models');

login.get('/',  async (req, res) => {
    try {
        res.status(200).render(`login`);
    } catch (err) {
        res.status(404).json(`Not found`);
    }
});

login.post('/', async (req, res) => {
    try {
      const userData = await User.findOne({
        where: {
            username: req.body.username,
        },
      });
      if (!userData) {
        res.status(400).json({ message: `Incorrect email or password.`});
        return;
      } else {
        const samePass = await userData.checkPassword(req.body.password);
        if (!samePass) {
            res.status(400).json({ message: `Incorrect password`});
            return;
        } else {
            req.session.save(() => {
                req.session.user_id = userData.id;
                req.session.logged_in = true;
                console.log(req.session);
                res.json({ message: `Successfully logged in!`});
            })
        }
      }
    } catch (err) {
        res.status(500).json(`Could not post information, ${err}`);
    }
})

module.exports = login;
