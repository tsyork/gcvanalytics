/**
 * Created by timyork on 9/12/15.
 */
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Ticket = mongoose.model('ticket');

/* GET the routed object. */
router.get('/', function(req, res) {
  res.render('support',{
    title: 'Support Page'});
});
module.exports = router;

/* POST form. */
router.post('/', function(req, res) {
  console.log(req.body);
  Ticket.create(req.body, function(err,post){
    if(err){
      console.log("db error in POST /support:" + err);
    } else {
      res.send('ticket submitted');
    }
  });
  //res.status(404).send('tried to send support ticket');
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
