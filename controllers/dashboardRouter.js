const dashboard = require('express').Router();

dashboard.get('/',  async (req, res) => {
    try {
        res.status(200).render(`dashboard`);
    } catch (err) {
        res.status(404).json(`Not found`);
    }
});

module.exports = dashboard;
