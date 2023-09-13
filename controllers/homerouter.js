const home = require('express').Router();

home.get('/',  async (req, res) => {
    try {
        res.status(200).render(`homepage`);
    } catch (err) {
        res.status(404).json(`Not found`);
    }
});

module.exports = home;
