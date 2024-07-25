const express = require('express');
const router = express.Router();
const NavLink = require('../models/NavLink');

router.get('/', async (req, res) => {
  try {
    const navLinks = await NavLink.find();
    res.json(navLinks);
  } catch (err) { 
    console.log(`Error retrieving navlinks ${err.message}`);
    res.status(500).json({  message: 'An error occurred while retrieving navlinks.' });
  }
});
module.exports = router;