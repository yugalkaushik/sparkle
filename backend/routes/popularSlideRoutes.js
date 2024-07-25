const express = require('express');
const router = express.Router();
const PopularSlides = require('../models/PopularSlide');

router.get('/', async (req, res) => {
  try {
    const slides = await PopularSlides.find();
    res.json(slides);
  } catch (err) {
    console.log(`Error retrieving popular slides: ${err.message}`);
    res.status(500).json({  message: 'An error occurred while retrieving popular slides.' });
  }
});

module.exports = router;                         