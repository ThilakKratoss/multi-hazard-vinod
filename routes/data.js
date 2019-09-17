var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET users listing. */
router.get('/', function(req, res, next) {
  

  res.send(JSON.parse(fs.readFileSync('./public/sampledata.json')));
});

module.exports = router;
