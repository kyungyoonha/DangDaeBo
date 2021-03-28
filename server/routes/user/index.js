const express = require('express');
const router = express.Router();

const { isLoggedIn, isNotLoggedIn } = require('../../middlewares');
const { loadMyInfo, signin, signup, logout } = require('./user.ctrl');

router.post('/signin', isNotLoggedIn, signin);
router.post('/signup', isNotLoggedIn, signup);
router.post('/signout', isLoggedIn, logout);
router.get('/me', isLoggedIn, loadMyInfo);

module.exports = router;
