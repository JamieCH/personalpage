'use strict';

/* express */
var express = require("express");
var http = require('http');
var app = express();
var path = require("path");

app.get('/', function(req, res){
	res.sendFile(path.join(__dirname + '/views/index.html'));
});

app.get('/index1', function(req, res){
    res.sendFile(path.join(__dirname + '/views/index1.html'));
});

app.use(express.static(__dirname, + '/public'));

app.listen(3000);

