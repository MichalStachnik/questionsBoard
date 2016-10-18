var questionData = require('../data/data.json');

module.exports.questionsGetAll = function(req, res){
    
    console.log('GET all questions');
    res
        .status(200)
        .json( questionData );
};