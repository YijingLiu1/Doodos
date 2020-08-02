const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const auth = require('../../middleware/auth');

const User = require('../../models/User');
const ShoppingItem = require('../../models/ShoppingItem');
const Cart = require('../../models/Cart');

// @route   GET api/cart
// @desc    GET a cart
// @access  Private

router.get('/', auth, async (req, res) => {
  try {
    const userId = req.user.id;
    let cart = await Cart.findOne({ userId });
    if (cart) {
      res.json(cart);
    } else {
      res.status(404).send('Cart not found');
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
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

// @route   DELETE api/cart/:id/:product_id
// @desc    Delete a product from the cart
// @access  Private

router.delete('/', auth, async (req, res) => {
  try {
    const { productId, quantity, name, price, imagePath } = req.body;
    const userId = req.user.id;
    let cart = await Cart.findOne({ userId });

    if (cart) {
      let itemIndex = cart.products.findIndex((p) => p.productId === productId);

      // check product exist
      if (productId > -1) {
        let productItem = cart.products[itemIndex];
        // check product quantity
        if (productItem.quantity === 1) {
          cart.products.splice(itemIndex, 1);
          await cart.save();
          res.json(cart);
        } else if (productItem.quantity >= quantity) {
          // remove product
          productItem.quantity -= quantity;

          await cart.save();
          res.json(cart);
          // if quantity reduced to 0, remove product from the cart
        } else {
          return res.status(400).json({
            msg: 'quantity error, cannot remove more than the actual quantity',
          });
        }
      }
    } else {
      return res
        .status(404)
        .json({ msg: 'There is not purchase in your cart yet' });
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});
module.exports = router;
