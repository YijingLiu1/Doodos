const mongoose = require('mongoose');
const ShoppingItemSchema = new mongoose.Schema({
  itemName: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  amount: {
    type: String,
    required: true,
  },
  available: {
    type: Boolean,
    required: true,
  },
});

let ShopppingItem;
module.exports = ShopppingItem = mongoose.model(
  'shoppingItem',
  ShoppingItemSchema
);
