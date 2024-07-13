const express = require('express');
const router = express.Router();
const Trends = require('../models/Trend');

router.get('/', async (req, res) => {
  try {
    const trendData = await Trends.findOne();
    res.json(trendData);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;