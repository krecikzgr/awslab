﻿//var AWS = require("/node_modules/aws-sdk");
//AWS.config.loadFromPath("./config.json");var AWS = require("./node_modules/aws-sdk");

AWS.config.loadFromPath('./config.json');

var task = function (request, callback) {
    var params = {
        DryRun: false,
    };
    var ec2 = new AWS.EC2();
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