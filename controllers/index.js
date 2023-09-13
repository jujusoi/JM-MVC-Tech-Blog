const router = require('express').Router();
const homeRoute = require('./homerouter');
const signUp = require('./signupRouter');
const dashboardRoute = require('./dashboardRouter');
const loginRoute = require('./loginRoute');
const api = require('./api');

router.use('/home', homeRoute);
router.use('/sign-up', signUp);
router.use('/dashboard', dashboardRoute);
router.use('/login', loginRoute);

router.use('/api', api);

module.exports = router;