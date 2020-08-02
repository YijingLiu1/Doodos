const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CartSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'user',
  },
  products: [
    {
      productId: {
        type: String,
        required: true,
      },
      name: {
        type: String,
      },
      imagePath: {
        type: String,
        required: true,
      },
      price: {
        type: Number,
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
      },
    },
  ],
  active: {
    type: Boolean,
    default: true,
  },
  modifedOn: {
    type: Date,
    default: Date.now,
  },
});

let Cart;
module.exports = Cart = mongoose.model('cart', CartSchema);
