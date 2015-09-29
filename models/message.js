// grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var messageSchema = new Schema({
  topic: { type: String, required: true, unique: false },
  subject: { type: String, required: true, unique: false },
  comment: { type: String, required: true, unique: false },
  from_user: { type: String, required: false, unique: false },
  created_at: { type: Date, required: false, unique: false },
  updated_at: { type: Date, required: false, unique: false }
});

// the schema is useless so far
// we need to create a model using it
var Message = mongoose.model('Message', messageSchema);

// make this available to our users in our Node applications
module.exports = Message;