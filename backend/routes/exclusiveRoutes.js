const express = require('express');
const router = express.Router();
const Exclusive = require('../models/Exclusive');

router.get('/exclusive', async (req, res) => {
  try {
    const exclusiveData = await Exclusive.findOne();
    res.json(exclusiveData);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
