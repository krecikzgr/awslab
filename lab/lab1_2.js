//stub for lab 1_2
var AWS = require('aws-sdk');

AWS.config.loadFromPath('./config.json');

var task =  function(request, callback){
    var params = {
        DryRun: true,

    };
    ec2.describeInstances(params, function (err, data) {
        if (err) {
            console.log(err, err.stack);
            callback(err, null);
        }// an error occurred
        else {
            console.log(data);
            callback(null, data);
        }         // successful response
    }); 
	
}

exports.lab = task