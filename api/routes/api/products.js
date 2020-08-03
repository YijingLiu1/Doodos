const express = require('express');
const router = express.Router();

const Product = require('../../models/Product');

// @route   GET api/products
// @desc    Create product from online store
// @access  Public

router.get('/', async (req, res) => {
  try {
    const product = await Product.find().sort({ date: -1 });
    res.json(product);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
