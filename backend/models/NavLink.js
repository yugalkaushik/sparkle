const mongoose = require('mongoose');

const navLinkSchema = new mongoose.Schema({
  label: {
    type: String,
    required: true
  },
  href: {
    type: String,
    required: true
  }
});

const NavLink = mongoose.model('NavLink', navLinkSchema);
    
module.exports = NavLink;