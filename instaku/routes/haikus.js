// ----------------------
// ****** Modules! ******
// ----------------------
var express = require('express');
var router = express.Router();
var haikuBot = require('../lib/haikuBot');

// --------------------
// ****** Route! ******
// --------------------

// /api/haikus
router.get('/', function(req, res){

  var haikusArray = [];

  if(req.query.random){  // /api/haikus?random=true
    haikusArray.push(
      {
        body: haikuBot.genKu(),
        username: 'Faku'
      }
    )
  }else{  // /api/haikus
    haikusArray.push({ // Will be replaced with Database!
      body: "I am a haikui\nI love to haiku\nCandle Store",
      username: 'Lichard89'
    });
  }

  res.json( {haikus: haikusArray} );

});


// ----------------------
// ****** Exports! ******
// ----------------------
module.exports = router;
