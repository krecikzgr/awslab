var AWS = require('aws­sdk');
AWS.config.loadFromPath('./config.json');var params = {
    DryRun: true || false,
    Filters: [
      {
          Name: 'STRING_VALUE',
          Values: [
            'STRING_VALUE',
          
          ]
      },
   
    ],
    InstanceIds: [
      'STRING_VALUE',
   
    ],
    MaxResults: 0,
    NextToken: 'STRING_VALUE'
};
ec2.describeInstances(params, function(err, data) {
    if (err) console.log(err, err.stack); // an error occurred
    else     console.log(data);           // successful response
});