const express = require('express');
const router = express.Router();
const {register, login} = require('../controllers/authController');

//USER REGISTRATION
router.post('/register',register);

//USER LOGIN
router.post('/login', login);

module.exports = router;
