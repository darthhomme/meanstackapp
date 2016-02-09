// -----------------------------------
// ****** Modules + Middleware! ******
// -----------------------------------

// Express: Web-Application Framework
var express = require('express');
var app = express();

// Morgan: Request Logging
var morgan = require('morgan');
app.use( morgan('dev') );

// Public: Set publically accessible directory
app.use(express.static('./public'));

// EJS: Template Rendering
app.set('view engine', 'ejs');


// ----------------------
// ****** Routing! ******
// ----------------------

// Consumer
// Index View: `/`
var index = require('./routes/index');
app.use('/', index);

// Service
// Haiku API: `/api/haikus`
var haikus = require('./routes/haikus');
app.use('/api/haikus', haikus);



// ---------------------
// ****** Listen! ******
// ---------------------
var port = 8080;
app.listen(port, function(){
  console.log('...listening on ' + port);
});
