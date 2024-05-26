const express = require('express');
const router = express.Router();
const Trend = require('../models/Trend');

router.get('/', async (req, res) => {
  try {
    const trend = await Trend.findOne();
    res.json(trend);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
