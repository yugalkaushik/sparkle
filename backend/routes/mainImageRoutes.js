const express = require('express');
const router = express.Router();
const MainImages = require('../models/MainImage');

router.get('/', async (req, res) => {
  try {
    const mainImageData = await MainImages.findOne();
    res.json(mainImageData);
  } catch (err) {
    console.log(`Error retrieving mainimage ${err.message}`);
    res.status(500).json({  message: 'An error occurred while retrieving mainimage.' });
  }
});

module.exports = router;