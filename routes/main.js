const express = require('express');
const router = express.Router();

const authController = require('../controllers/authController');
const mainController = require('../controllers/mainController');

const { ensureAuth } = require('../middleware/auth');

router.get('/', mainController.getIndex);
router.get('/login', authController.getLogin);
router.post('/login', authController.postLogin);
router.get('/signup', authController.getSignup);
router.post('/signup', authController.postSignup);

router.get('/dashboard', ensureAuth, mainController.getDashboard);

module.exports = router;
