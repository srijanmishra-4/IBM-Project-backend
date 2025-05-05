const express = require('express');
const router = express.Router();

const authRoutes =  require('./authRoutes')
const quizeRoutes = require('./quizRoutes')

router.use('/api/auth', authRoutes);
router.use('/api/quiz', quizeRoutes)



module.exports = router;