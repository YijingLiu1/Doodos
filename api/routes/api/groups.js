const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');

const Group = require('../../models/Group');
const User = require('../../models/User');

// @route   GET api/groups
// @desc    Get all groups
// @access  Public
router.get('/', async (res, req) => {
  try {
    const groups = await Groups.find().sort({ date: -1 }); // most recent group first
    res.json(groups);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   GET api/groups/:id
// @desc    Get one group by id
// @access  Public
router.get(':/id', async (res, req) => {
  try {
    const group = await Group.findById(req.params.id);

    if (!group) {
      return res.status(404).json({ msg: 'There is no group under this ID' });
    }

    res.json(group);
  } catch (err) {
    console.error(err.message);
    if (err.kind === 'objectId') {
      return res.status(404).json({ msg: 'Post not found' });
    }
    res.status(500).send('Server Error');
  }
});

// @route   POST api/groups
// @desc    Create one group
// @access  Private
