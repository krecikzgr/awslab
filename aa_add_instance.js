

//var AWS = require("/node_modules/aws-sdk");
//AWS.config.loadFromPath("./config.json");var AWS = require("./node_modules/aws-sdk");

AWS.config.loadFromPath('./config.json');


var task = function (request, callback) {
    var params = {
        ImageId: 'ami-4983d779', /* required */
        MaxCount: 1, /* required */
        MinCount: 1, /* required */


        Monitoring: {
            Enabled: true /* required */
        },

      
    };
    var ec2 = new AWS.EC2();
    ec2.runInstances(params, function (err, data) {
        if (err) {
            console.log(err, err.stack);
            callback(err, null);
        }// an error occurred
        else {
            console.log(data);
            callback(null, data);
        }            // successful response
    });

}

exports.lab = task