const express = require('express');
const router = express.Router();
const TextSlides = require('../models/TextSlide');

router.get('', async (req, res) => {
  try {
    const slides = await TextSlides.find();
    res.json(slides);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;