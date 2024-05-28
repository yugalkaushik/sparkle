const express = require('express');
const router = express.Router();
const ClassicSlides = require('../models/ClassicSlides');

router.get('/', async (req, res) => {
  try {
    const classicslides = await ClassicSlides.find();
    res.json(classicslides);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
