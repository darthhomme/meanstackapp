
// ----------------------
// ****** Modules! ******
// ----------------------
var express = require('express');
var router = express.Router();


// --------------------
// ****** Route! ******
// --------------------
router.get('/', function(req, res){
  res.render('index', {name: 'Cecelious'});
});


// ----------------------
// ****** Exports! ******
// ----------------------
module.exports = router;
