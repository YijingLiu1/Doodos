const mongoose = require('mongoose');
const EventSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  imagePath: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  flatNumber: {
    type: String,
  },
  street: {
    type: String,
  },
  postCode: {
    type: String,
  },
  City: {
    type: String,
  },
  state: {
    type: String,
  },
  host: {
    type: String,
    required: true,
  },
  registered: [
    {
      memberName: String,
      gravatar: String,
    },
  ],
  from: {
    type: Date,
  },
  to: {
    type: Date,
  },
  modifiedOn: {
    type: Date,
    default: Date.now,
    required: true,
  },
  ticketrequired: {
    type: Boolean,
    default: false,
    required: true,
  },
  ticketPrice: {
    type: Number,
    required: true,
  },
});

module.exports = Event = mongoose.model('event', EventSchema);
