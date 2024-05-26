const express = require('express');
const router = express.Router();
const ClassicSlide = require('../models/ClassicSlide');

router.get('/', async (req, res) => {
  try {
    const classicslides = await ClassicSlide.find();
    res.json(classicslides);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
