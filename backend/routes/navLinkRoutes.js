const express = require('express');
const router = express.Router();
const NavLink = require('../models/NavLink');

router.get('/', async (req, res) => {
  try {
    const navLinks = await NavLink.find();
    res.json(navLinks);
  } catch (err) { 
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
