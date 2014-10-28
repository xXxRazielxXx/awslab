var lab1_2 = require("./lab/lab1_2").lab
var example_1 = require("./example_1").lab;

var PORT = 8080;


var urlMap = [
	{path: "/", action:__dirname + "/static/index.html"},	 
	{path: "/digest", action: lab1_2},	
	{path: "/example_1", action: example_1}, 
	];

var service = require("./lib/service").http(urlMap);

service(PORT);

