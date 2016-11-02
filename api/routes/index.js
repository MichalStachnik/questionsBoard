var express = require('express');
var router = express.Router();
var crtlQuestions = require('../controllers/questions.controllers.js');
var crtlAnswers = require('../controllers/answers.controllers.js');


router
    .route('/questions')
    .get(crtlQuestions.questionsGetAll);

router
    .route('/questions/:qId')
    .get(crtlQuestions.questionsGetOne);

router
    .route('/questions/new')
    .post(crtlQuestions.questionsNew);

//direct answer routes
router
    .route('/questions/:qId/answers')
    .get(crtlAnswers.answersGetAll);
router
    .route('/questions/:qId/answers/:aId')
    .get(crtlQuestions.answersGetOne);

module.exports = router;

//db.questions.update(
//    {},
//    {
//        $set : {
//            "answers.0._id" : ObjectId()
//        }    
//    },
//    {
//        multi : true
//    }
//)