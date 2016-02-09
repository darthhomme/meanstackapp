var express   = require('express'),
    app       = express(),
    mongoose  = require('mongoose'),
    port      = 8080;

app.use(express.static('./public'));

app.listen(port, function(){
  console.log("Port " + port + " is on.");
})
