// src/Routers/userRoutes.js
const express = require('express');
const router = express.Router();
const userController = require('../Controllers/userController');
const authMiddleware = require('../Middleware/authMiddleware');

router.post('/register', userController.register);
router.post('/login', userController.login);
router.post('/refresh', userController.refresh);
router.post('/google', userController.google);
router.post('/logout', (req, res) => res.json({ message: 'Logout endpoint (client side should delete tokens)' }));
router.get('/me', authMiddleware, userController.me);

module.exports = router;
