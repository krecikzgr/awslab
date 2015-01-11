

//var AWS = require("/node_modules/aws-sdk");
//AWS.config.loadFromPath("./config.json");var AWS = require("./node_modules/aws-sdk");

AWS.config.loadFromPath('./config.json');


var task = function (request, callback) {
    var params = {
        ImageId: 'i-8c249b80', /* required */
        MaxCount: 1, /* required */
        MinCount: 1, /* required */


        Monitoring: {
            Enabled: true /* required */
        },
        NetworkInterfaces: [
          {
              DeviceIndex: 0,
              NetworkInterfaceId: 'STRING_VALUE',
              PrivateIpAddresses: [
                {
                    PrivateIpAddress: '172.31.28.83', /* required */
                   
                },
                /* more items */
              ],
              SecondaryPrivateIpAddressCount: 0,
   
          },
          /* more items */
        ],
      
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