var MongoClient = require('mongodb').MongoClient;
var dbUrl = 'mongodb://localhost:27017/questionsBoard';

var _connection = null;

var open = function(){
    //set the connections
    MongoClient.connect(dbUrl, function(err, conn){
        if(err){
            console.log('db connection error');
            return;
        }
        _connection = conn;
        console.log('db connection opened', _connection);
    });
};

var get = function(){
    return _connection;
}

module.exports = {
    open : open,
    get : get
};