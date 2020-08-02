const express = require('express');
const router = express.Router();

const Shoppingitem = require('../../models/ShoppingItem');

// @route   GET api/shoppingitems
// @desc    Create shoppingitems from online store
// @access  Public

router.get('/', async (req, res) => {
  try {
    const shoppingitems = await Shoppingitem.find().sort({ date: -1 });
    res.json(shoppingitems);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
