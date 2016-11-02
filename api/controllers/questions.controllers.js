var mongoose = require('mongoose');
var question = mongoose.model('question');

module.exports.questionsGetAll = function(req, res){
    
    question
        .find()
        .exec(function(err, questions){
        console.log('found these questions', questions.length)
        res
            .json(questions); 
    });
};

module.exports.questionsGetOne = function(req, res){
    
    var questionId = req.params.qId;
    console.log('GET to ' + questionId);
    
    question
        .findById(questionId)
        .exec(function(err, data){
            res
                .status(200)
                .json( data );
    });
};

module.exports.questionsNew = function(req, res){
    
    var db = dbConn.get();
    var collection = db.collection('questions');
    
    console.log("Post to new question");
    
    if(req.body && req.body.name && req.body.question){
        console.log(req.body);
        collection.insertOne(req.body, function(err, response){
            if(err){
                console.log(err);
            }
            else{
            console.log(response.ops);
            res
                .status(201)
                .json(response.ops);
            }
        });
    }
    else{
        console.log('data missing from request body');
        res
            .status(400)
            .json({ message : "data missing from request body" });
    }
}