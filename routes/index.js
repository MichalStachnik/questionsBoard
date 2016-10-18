var express = require('express');
var router = express.Router();


router
    .route('/json')
    .get(function(req, res){
        console.log('GET to /json');
        res
            .status(200)
            .json( {"someJSON" : "This is some JSON from the router"} );
    
    })
    .post(function(req, res){
        console.log('POST to /json');
        res
            .status(200)
            .json( {"someJSON" : "This is some more JSON with a post"} );
    
    });

module.exports = router;