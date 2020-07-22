const mongoose = require('mongoose');
const ProfileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
  },
  bio: {
    type: String,
  },
  // whether a artist, general public or a student
  status: {
    type: String,
    required: true,
  },
  // entered in the UI and react in a comman separated value list
  skills: {
    type: [String],
    required: true,
  },
  location: {
    type: String,
  },
  website: {
    type: String,
  },
  experience: [
    {
      title: {
        type: String,
        required: true,
      },
      location: {
        type: String,
        required: true,
      },
      description: {
        type: String,
      },
    },
  ],
  social: {
    youtube: {
      type: String,
    },
    twitter: {
      type: String,
    },
    facebook: {
      type: String,
    },
    instagram: {
      type: String,
    },
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

let Profile;
module.exports = Profile = mongoose.model('profile', ProfileSchema);
