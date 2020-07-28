const mongoose = require('mongoose');
const EventSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  host: {
    type: String,
    required: true,
  },
  from: {
    type: Date,
  },
  to: {
    type: Date,
  },
  date: {
    type: Date,
    required: true,
  },
  Ticket: {
    type: Boolean,
    required: true,
  },
});

module.exports = Event = mongoose.model('event', EventSchema);