var mongoose = require('mongoose');

var dbUrl = 'mongodb://localhost:27017/questionsBoard';

mongoose.connect(dbUrl);

mongoose.connection.on('connected', function(){
    console.log('mongoose connected to ' + dbUrl);
});

mongoose.connection.on('disconnected', function(){
    console.log('mongoose has disconnected from ' + dbUrl); 
});

mongoose.connection.on('error', function(err){
   console.log('there has been an error' + err); 
});

//fired when you press ctrl + c
process.on('SIGINT', function(){
    mongoose.connection.close(function(){
        console.log('mongoose close has been called through the app SIGINT');
        process.exit(0);
    });
});

process.on('SIGTERM', function(){
    mongoose.connection.close(function(){
        console.log('mongoose close has been called through the app SIGTERM');
        process.exit(0);
    });
});


//Get schema
require('./questions.model.js');