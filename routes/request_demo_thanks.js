var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
//var Comment = mongoose.model('comments');

/* GET form. */
router.get('/', function(req, res) {
  res.render(
      'request_demo_thanks',
      {title : 'Thank You'}
  );
});

module.exports = router;