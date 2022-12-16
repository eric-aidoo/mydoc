const { tryCatch } = require('../helpers/try-catcher');
const { signUp } = require('./controllers/auth-controller');

const router = require('express').Router();

// POST endpoints
router.post('/signup', tryCatch(signUp))


module.exports = router;