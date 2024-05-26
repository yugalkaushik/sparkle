const mongoose = require('mongoose');

const discoverSlideSchema = new mongoose.Schema({
  title: String,
  image: String,
  caption: String
});

const DiscoverSlide = mongoose.model('DiscoverSlide', discoverSlideSchema);

module.exports = DiscoverSlide;
