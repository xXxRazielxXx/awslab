//stub for lab 1_2
var AWS = require('aws-sdk');

AWS.config.loadFromPath('./config.json');

var task =  function(request, callback){

	var ec2 = new AWS.EC2();
	var params = {};
	ec2.describeInstances(params, function(err, data) {
			if (err) console.log(err, err.stack); // an error occurred
			else     console.log(data);           // successful response
});
	callback(null, "hello form ec2 action");
	
}


exports.lab = task