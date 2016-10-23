var express = require('express');
var router = express.Router();
var crtlQuestions = require('../controllers/questions.controllers.js');


router
    .route('/questions')
    .get(crtlQuestions.questionsGetAll);

router
    .route('/questions/:qId')
    .get(crtlQuestions.questionsGetOne);

module.exports = router;