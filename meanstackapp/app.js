var express = require('express');
var app = express();
var mongoose = require('mongoose');

app.set('view engine', 'ejs');

var port = 8080;
app.listen(port, function(){
  console.log("I'm listening on port " + port);
})
