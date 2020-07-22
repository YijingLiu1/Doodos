const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
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

let User;
module.exports = User = mongoose.model('user', UserSchema);
