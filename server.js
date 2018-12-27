const express = require('express');
const path = require('path')
// set port 
const port = process.env.PORT  || 8080
var app = express(); 

app.use(express.static(__dirname + "/public"));

app.get('/', function(req, res) {
  res.status(200);
  res.sendfile("index.html");
})

app.get('/.*', function(req, res) {
  res.status(200);
  res.sendfile("index.html");
})

app.listen(port, function() {
	console.log("app running"); 
})
