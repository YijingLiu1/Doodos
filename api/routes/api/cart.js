const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const auth = require('../../middleware/auth');

const User = require('../../models/User');
const ShoppingItem = require('../../models/ShoppingItem');
const Cart = require('../../models/Cart');

router.get('/', (req, res) => {
  res.send('hello');
});

// @route   POST api/cart
// @desc    Create a cart
// @access  Private
router.post('/', auth, async (req, res) => {
  const { productId, quantity, name, price, imagePath } = req.body;

  const userId = req.user.id;
  try {
    let cart = await Cart.findOne({ userId });

    if (cart) {
      // cart exists for user
      let itemIndex = cart.products.findIndex((p) => p.productId == productId);

      if (itemIndex > -1) {
        // product exists in the cart, update the quantity
        let productItem = cart.products[itemIndex];
        productItem.quantity += quantity;
        cart.products[itemIndex] = productItem;
      } else {
        // product does not exist in the cart, add a new item
        cart.products.push({ productId, name, imagePath, price, quantity });
      }
      await cart.save();
      res.json(cart);
    } else {
      // there is no cart for this user, create a cart
      const newCart = await Cart.create({
        userId,
        products: [{ productId, name, imagePath, price, quantity }],
      });
      res.json(newCart);
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   DELETE api/cart
// @desc    Delete a product from the cart
// @access  Private

module.exports = router;
