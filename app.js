var lab1_1 = require("./lab/lab1_1").lab
var example_1 = require("./example_1").lab;
var ak_lab2=require("./ak_lab2").lab;

var PORT = 8181;
var urlMap = [
	{path: "/", action:__dirname + "/static/index.html"},	 
	{path: "/digest", action: lab1_1},	
	{ path: "/example_1", action: example_1 },
    {path: "/something", action: ak_lab2},
	];
var service = require("./lib/service").http(urlMap);
service(PORT);

