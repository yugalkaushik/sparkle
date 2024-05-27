const express = require('express');
const router = express.Router();
const PopularSlide = require('../models/PopularSlide');

router.get('/popular', async (req, res) => {
  try {
    const slides = await PopularSlide.find();
    res.json(slides);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
