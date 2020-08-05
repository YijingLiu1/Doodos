const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
  },

  /*
  {
    ideas: {
      type: Boolean,
      default: false,
    },
    artworks: {
      type: Boolean,
      default: false,
    },
    spotsAroundYou: {
      type: Boolean,
      default: false,
    },
    fashion: {
      type: Boolean,
      default: false,
    },
    advertisement: {
      type: Boolean,
      default: false,
    },
    activities: {
      type: Boolean,
      default: false,
    },
    events: {
      type: Boolean,
      default: false,
    },
    life: {
      type: Boolean,
      default: false,
    },
  */
  categories: [
    {
      type: String,
      required: true,
    },
  ],

  title: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
  },
  text: {
    type: String,
    required: true,
  },
  // name of the user
  name: {
    type: String,
  },
  avatar: {
    type: String,
  },
  likes: [
    {
      user: {
        type: Schema.Types.ObjectId,
      },
    },
  ],
  comments: [
    {
      user: {
        type: Schema.Types.ObjectId,
      },
      text: {
        type: String,
        required: true,
      },
      name: {
        type: String,
      },
      avatar: {
        type: String,
      },
      date: {
        type: Date,
        default: Date.now,
      },
    },
  ],
  date: {
    type: Date,
    default: Date.now,
  },
});

let Post;
module.exports = Post = mongoose.model('post', PostSchema);
