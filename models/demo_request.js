// grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var demoRequestSchema = new Schema({
  priorities: { type: String, required: true, unique: false },
  subscriptions: { type: String, required: false, unique: false },
  other_info: { type: String, required: false, unique: false },
  pref_date: { type: Date, required: false, unique: false },
  pref_time: { type: String, required: false, unique: false },
  email: { type: String, required: false, unique: false },
  phone_number: { type: String, required: false, unique: false },
  created_at: { type: Date, required: false, unique: false },
  updated_at: { type: Date, required: false, unique: false }
});

// the schema is useless so far
// we need to create a model using it
var DemoRequest = mongoose.model('DemoRequest', messageSchema);

// make this available to our users in our Node applications
module.exports = DemoRequest;