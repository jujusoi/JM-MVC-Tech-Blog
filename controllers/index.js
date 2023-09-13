const router = require('express').Router();
const homeRoute = require('./homerouter');

router.use('/home', homeRoute);

router.get('/', async (req, res) => {
    try {
        res.status(200).render(`signup`);
    } catch (err) {
        res.status(404).json(`Aint work`)
    }
});

module.exports = router;