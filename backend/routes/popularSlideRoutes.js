const express = require('express');
const router = express.Router();
const PopularSlides = require('../models/PopularSlide');

router.get('/', async (req, res) => {
  try {
    const slides = await PopularSlides.find();
    res.json(slides);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;                         