const express = require('express');
const router = express.Router();

// @route   POST api/shoppingitems
// @desc    Create a post
// @access  Private
router.get('/', (req, res) => res.send('ShoppingItem route'));

module.exports = router;
