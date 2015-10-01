/**
 * Created by timyork on 9/12/15.
 */
var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var messageSchema = new Schema({
  topic: { type: String, required: true, unique: false },
  subject: { type: String, required: true, unique: false },
  comment: { type: String, required: true, unique: false },
  email: { type: String, required: true, unique: false },
  from_user: { type: String, required: false, unique: false },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now }
});

var ticketSchema = new Schema({
  issue_type: { type: String, required: true, unique: false },
  location: { type: String, required: false, unique: false },
  subject: { type: String, required: true, unique: false },
  description: { type: String, required: true, unique: false },
  email: { type: String, required: true, unique: false },
  from_user: { type: String, required: false, unique: false },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
  assigned_to: { type: String, required: false, unique: false },
  status: {
    type: String,
    enum: ['Unassigned', 'Open', 'In Process', 'Resolved'],
    default: 'Unassigned'
  }
});

var demoRequestSchema = new Schema({
  priorities: { type: String, required: true, unique: false },
  subscriptions: { type: String, required: false, unique: false },
  other_info: { type: String, required: false, unique: false },
  pref_date: { type: Date, required: false, unique: false },
  email: { type: String, required: false, unique: false },
  phone_number: { type: String, required: false, unique: false },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now }
});

// the schemas are useless so far
// we need to create models using them
mongoose.model('message', messageSchema);
mongoose.model('ticket', ticketSchema);
mongoose.model('demo_request', demoRequestSchema);
