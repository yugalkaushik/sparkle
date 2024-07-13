const express = require('express');
const router = express.Router();
const DiscoverSlides = require('../models/DiscoverSlide');

router.get('/', async (req, res) => {
  try {
    const discoverslides = await DiscoverSlides.find();
    res.json(discoverslides);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;