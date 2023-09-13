const router = require('express').Router();
const homeRoute = require('./homerouter');
const signUp = require('./signupRouter');
const dashboardRoute = require('./dashboardRouter');
const loginRoute = require('./loginRoute');

router.use('/home', homeRoute);
router.use('/sign-up', signUp);
router.use('/dashboard', dashboardRoute);
router.use('/login', signUp);

module.exports = router;