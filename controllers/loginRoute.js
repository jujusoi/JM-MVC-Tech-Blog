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
      const samePass = await userData.checkPassword(req.body.password);
      console.log(samePass);
    } catch (err) {

    }
})

module.exports = login;
