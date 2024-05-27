const express = require('express');
const router = express.Router();
const TextSlide = require('../models/TextSlide');

router.get('/api/textslide', async (req, res) => {
  try {
    const slides = await TextSlide.find();
    res.json(slides);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
