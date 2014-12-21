var lab1_1 = require("./lab/lab1_1").lab
var example_1 = require("./example_1").lab;
var ak_lab2=require("./ak_lab2.js").lab;

var PORT = 8080;


var urlMap = [
	{path: "/", action:__dirname + "/static/index.html"},	 
	{path: "/digesst", action: lab1_1},	
	{path: "/example_1s", action: example_1}, 
	];

var service = require("./lib/service").http(urlMap);

service(PORT);

