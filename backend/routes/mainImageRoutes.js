const express = require('express');
const router = express.Router();
const MainImages = require('../models/MainImage');

router.get('/', async (req, res) => {
  try {
    const mainImageData = await MainImages.findOne();
    res.json(mainImageData);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
