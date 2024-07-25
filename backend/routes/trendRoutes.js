const express = require('express');
const router = express.Router();
const Trends = require('../models/Trend');

router.get('/', async (req, res) => {
  try {
    const trendData = await Trends.findOne();
    res.json(trendData);
  } catch (err) {
    console.log(`Error retrieving trends ${err.message}`);
    res.status(500).json({  message: 'An error occurred while retrieving trends.' });
  }
});

module.exports = router;