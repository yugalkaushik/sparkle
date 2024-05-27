const express = require('express');
const router = express.Router();
const MainImage = require('../models/MainImage');

router.get('/mainimage', async (req, res) => {
  try {
    const mainImageData = await MainImage.findOne();
    res.json(mainImageData);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
