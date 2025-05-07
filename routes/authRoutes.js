const express = require('express');
const router = express.Router();

const authController = require('../contoller/authController')

router.post('/sign-in' , authController.singIn)

router.post('/sign-up' , authController.signOut)

router.get('/generate-otp' , authController.generateOTP)

// router.post('/otp/verify-otp' , authController.verifyOTP)

router.post('/logout', (req, res) => {
    return res.status(200).json({ message: 'Logged out successfully' });
});

module.exports = router;