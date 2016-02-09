// Modules

var express     = require('express'),
    bodyParser  = require('body-parser');

// App config
var app = express();
app.use(express.static('./public'));
app.use( bodyParser.urlencoded({extended: true}) );
app.use( bodyParser.json() );

app.set('view engine', 'ejs');

app.get('/', function(req, res){
  res.render('index');
});

var port = 8080;
app.listen(port, function(){
  console.log("Port " + port + " is up and running.");
})
