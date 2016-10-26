var dbConn = require('../data/dbConnection.js');
var questionData = require('../data/data.json');

module.exports.questionsGetAll = function(req, res){
    
    var db = dbConn.get();
    
    console.log('db', db);
    
    console.log('GET all questions');
    res
        .status(200)
        .json(questionData);
};

module.exports.questionsGetOne = function(req, res){

    var questionId = req.params.qId;
    var thisQuestion = questionData[questionId];
    console.log('GET to ' + questionId);
    
    res
        .status(200)
        .json(thisQuestion);
};

module.exports.questionsNew = function(req, res){
    console.log("Post to new");
    console.log(req.body);
    res
        .status(200)
        .json(req.body);
}