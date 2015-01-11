var lab1_1 = require("./lab/lab1_1").lab
var example_1 = require("./example_1").lab;
var ak_lab2 = require("./ak_lab2").lab;
var ak_lab2_add_instance = require("./lab/lab2/aa_add_instance").lab;

var PORT = 8080;
var urlMap = [
	{path: "/", action:__dirname + "/static/index.html"},	 
	{path: "/digest", action: lab1_1},	
	{ path: "/example_1", action: example_1 },
    { path: "/something", action: ak_lab2 },
    {path: "/lab2addinstance", action: ak_lab2_add_instance},

	];
var service = require("./lib/service").http(urlMap);
service(PORT);

