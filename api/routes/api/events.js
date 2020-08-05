const express = require('express');
const router = express.Router();

const Event = require('../../models/Event');

// @route   GET api/events
// @desc    Get all events
// @access  Public

router.get('/', async (req, res) => {
  try {
    const event = await Event.find().sort({ date: -1 });
    res.json(event);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   GET api/events/:id
// @desc    Get event by ID
// @access  Public

router.get('/:id', async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);
    if (!event) {
      return res.status(404).json({ msg: 'There is no event under this ID' });
    }
    res.json(event);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
