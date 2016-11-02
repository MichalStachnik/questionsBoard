var mongoose = require('mongoose');


var answerSchema = new mongoose.Schema({
    author: {
        type : String,
        required : true
    },
    answer : {
        type: String,
        required : true
    },
    date : {
        type: Date,
        default : Date.now
    }
    
});


var questionSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    author : {
        type : String,
        default : 'anonymous user'
    },
    question : {
        type : String,
        required : true
    },
    numAnswers : Number,
    
    answers : [answerSchema]
});

//compiling the model from the schema
mongoose.model('question', questionSchema, 'questions');
//          name of model, the schema to use, the collection to use