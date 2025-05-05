const express = require('express');
const router = express.Router();

const quizeController  = require('../contoller/quizController')

router.get('/generate-test', quizeController.generateTestController)
router.post('/evaluate-test' ,quizeController.evaluateTestController)

module.exports = router;