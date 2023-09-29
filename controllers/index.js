const router = require('express').Router();
const homeRoute = require('./homerouter');
const signUp = require('./signupRouter');
const dashboardRoute = require('./dashboardRouter');
const loginRoute = require('./loginRoute');
const logoutRoute = require('./logoutRouter');
const newPostRoute = require('./newpostRouter');
const api = require('./api');
const { loggedIn } = require('../config/middleware/auth');
 
router.use('/home', homeRoute);
router.use('/sign-up', signUp);
router.use('/dashboard', loggedIn, dashboardRoute);
router.use('/login', loginRoute);
router.use('/logout', loggedIn, logoutRoute);
router.use('/new-post', newPostRoute);

router.use('/api', api);

module.exports = router;