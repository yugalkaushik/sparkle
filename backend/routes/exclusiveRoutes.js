const express = require('express');
const router = express.Router();
const Exclusives = require('../models/Exclusive');

router.get('/', async (req, res) => {
  try {
    const exclusiveData = await Exclusives.findOne();
    res.json(exclusiveData);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;