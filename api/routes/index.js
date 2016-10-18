var express = require('express');
var router = express.Router();
var crtlQuestions = require('../controllers/questions.controllers.js');


router
    .route('/questions')
    .get(crtlQuestions.questionsGetAll);

module.exports = router;