const sign = require('express').Router();

sign.get('/',  async (req, res) => {
    try {
        res.status(200).render(`signup`);
    } catch (err) {
        res.status(404).json(`Not found`);
    }
});

module.exports = sign;
