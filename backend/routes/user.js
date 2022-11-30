const express = require('express');

// Controller functions
const { loginUser, registerUser } = require('../controllers/userController');

const router = express.Router();

// User login route
router.post('/login', loginUser)


// User register route
router.post('/register', registerUser)


module.exports = router;