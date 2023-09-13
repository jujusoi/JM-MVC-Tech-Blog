const router = require('express').Router();

router.get('/', async (req, res) => {
    try {
        res.status(500).render(`signup`);
    } catch (err) {
        res.status(404).json(`Aint work`)
    }
});

module.exports = router;