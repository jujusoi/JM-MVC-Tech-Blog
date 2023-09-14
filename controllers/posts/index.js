const router = require('express').Router();
const postRoute = require('./postRouter');

router.use('/', postRoute);

module.exports = router;