const login = require('express').Router();

login.get('/',  async (req, res) => {
    try {
        res.status(200).render(`login`);
    } catch (err) {
        res.status(404).json(`Not found`);
    }
});

module.exports = login;
