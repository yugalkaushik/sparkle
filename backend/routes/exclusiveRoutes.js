const express = require('express');
const router = express.Router();
const Exclusives = require('../models/Exclusive');

router.get('/', async (req, res) => {
  try {
    const exclusiveData = await Exclusives.findOne();
    res.json(exclusiveData);
  } catch (err) {
    console.log(`Error retrieving exclusive: ${err.message}`);
    res.status(500).json({  message: 'An error occurred while retrieving exclusive.' });
  }
});

module.exports = router;