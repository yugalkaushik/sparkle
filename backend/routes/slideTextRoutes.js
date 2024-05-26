const express = require('express');
const router = express.Router();
const SlideText = require('../models/SlideText');

router.get('/', async (req, res) => {
  try {
    const slides = await SlideText.find();
    res.json(slides);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
