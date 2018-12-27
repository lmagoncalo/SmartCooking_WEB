const express = require('express');
const path = require('path')
// set port 
const port = process.env.PORT  || 8080
var app = express(); 

app.use(express.static(__dirname + "/public"));

app.get('/', function(req, res) {
  res.type(text/html);
  res.status(200);
  res.send(<p>HELLO WORLD!);
})

app.listen(port, function() {
	console.log("app running"); 
})
