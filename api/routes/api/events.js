const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const Event = require('../../models/Event');

// @route   POST api/cart/:id/:product_id
// @desc    Registered an event
// @access  Private
router.post('/', auth, (req, res) => {
  res.send('Hello');
});

// @route   DELETE api/cart/:id/:product_id
// @desc    Unregistered an event
// @access  Private
router.delete('/', auth, (req, res) => {
  res.send('Hello');
});
