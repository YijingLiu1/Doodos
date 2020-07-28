const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TrollySchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users',
  },
  buyings: [
    {
      shoppingItem: {
        type: Schema.Types.ObjectId,
        ref: 'shoppingItem',
      },
    },
  ],
  sum: {
    type: String,
  },
});
