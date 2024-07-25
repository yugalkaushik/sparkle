const express = require('express');
const router = express.Router();
const DiscoverSlides = require('../models/DiscoverSlide');

router.get('/', async (req, res) => {
  try {
    const discoverslides = await DiscoverSlides.find();
    res.json(discoverslides);
  } catch (err) {
    console.log(`Error retrieving discover slides: ${err.message}`);
    res.status(500).json({  message: 'An error occurred while retrieving discover slides.' });
  }
});

module.exports = router;