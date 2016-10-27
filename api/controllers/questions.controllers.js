var dbConn = require('../data/dbConnection.js');
var questionData = require('../data/data.json');
var ObjectId = require('mongodb').ObjectId;

module.exports.questionsGetAll = function(req, res){
    
    var db = dbConn.get();
    var collection = db.collection('questions');
    
    collection
        .find()
        .toArray(function(err, data){
            console.log('found these questions', data);
    
            res
                .status(200)
                .json(data); 
    });
    
//    console.log('db', db);
//    
//    console.log('GET all questions');
//    res
//        .status(200)
//        .json(questionData);
};

module.exports.questionsGetOne = function(req, res){
    
    var db = dbConn.get();
    var collection = db.collection('questions');
    
    var questionId = req.params.qId;
    //var thisQuestion = questionData[questionId];
    console.log('GET to ' + questionId);
    
    collection
        .findOne({
            _id : ObjectId(questionId)
    }, function(err, data){
            res
                .status(200)
                .json( data );
    });
    
//    res
//        .status(200)
//        .json(thisQuestion);
};

module.exports.questionsNew = function(req, res){
    
    var db = dbConn.get();
    
    console.log("Post to new");
    console.log(req.body);
    res
        .status(200)
        .json(req.body);
}