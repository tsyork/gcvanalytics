/**
 * Created by timyork on 9/12/15.
 */
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Message = mongoose.model('message');

/* GET the routed object. */
router.get('/', function(req, res) {
  res.render('contact',{
    title: 'Contact Us'});
});
module.exports = router;

/* POST form. */
router.post('/', function(req, res) {
  console.log(req.body);
  Message.create(req.body, function(err,post){
    if(err){
      console.log("db error in POST /contact:" + err);
    } else {
      res.send('message sent');
    }
  });
  //var msg1 = new Message({
  //  topic : req.body.topic,
  //  subject : req.body.subject,
  //  comment : req.body.comment
  //});
  //
  //msg1.save(function(err) {
  //  if (err) return handleError(err);
  //});
});
