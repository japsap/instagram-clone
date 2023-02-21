const router = require('express').Router();

const authController = require('./controllers/authController');

router.use('/', authController);

module.exports = router