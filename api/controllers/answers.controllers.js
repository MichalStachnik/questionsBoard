var mongoose = require('mongoose');
var question = mongoose.model('question');

module.exports.answersGetAll = function(req, res){
    var questionId = req.params.qId;
    
    console.log('GET to answersGetAll');
    
    question
        .findById(questionId)
        .select('answers')
        .exec(function(err, doc){
            res
                .status(200)
                .json( doc.answers );
    });
    
}

module.exports.answersGetOne = function(req, res){
    var questionId = req.params.qId;
    var answerId = req.params.aId;
    consoel.log('GET to answer ' + answerId + ' and ' + questionId);
    
}