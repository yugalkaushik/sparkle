const express = require('express');
const router = express.Router();
const ClassicSlides = require('../models/ClassicSlides');

router.get('/', async (req, res) => {
  try {
    const classicslides = await ClassicSlides.find();
    res.json(classicslides);
  } catch (err) {
    console.log(`Error retrieving classic slides: ${err.message}`);
    res.status(500).json({  message: 'An error occurred while retrieving classic slides.' });
  }
});

module.exports = router;