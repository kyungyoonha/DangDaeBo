const express = require('express');
const router = express.Router();

const { getPosts } = require('./post.ctrl');

router.get('/', getPosts);

module.exports = router;
