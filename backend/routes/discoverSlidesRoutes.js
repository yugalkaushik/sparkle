const express = require('express');
const router = express.Router();
const DiscoverSlide = require('../models/DiscoverSlide');

router.get('/discover', async (req, res) => {
  try {
    const discoverslides = await DiscoverSlide.find();
    res.json(discoverslides);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
