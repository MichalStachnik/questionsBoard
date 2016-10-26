require('./api/data/dbConnection.js').open();
var express = require('express');
var app = express();
var path = require('path');
var routes = require('./api/routes');
var bodyParser = require('body-parser');


app.set('port', 3000);

app.use(function(req, res, next){
    console.log(req.method, req.url);
    next();
});

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({ extended : false }));

app.use('/api', routes);



var server = app.listen(app.get('port'), function(){
    var port = server.address().port;
    console.log('listening on port ' + port);
    
});



//app.get('/json', function(req, res){
//    console.log('GET to /json');
//    res
//        .status(200)
//        .json({ "JSON" : true });
//});
//
//app.get('/file', function(req, res){
//    console.log('GET to /file');
//    res
//        .status(200)
//        .sendFile(path.join(__dirname, 'app.js'));
//});