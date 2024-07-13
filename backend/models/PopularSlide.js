// models/PopularSlide.js
const mongoose = require('mongoose');

const popularSlideSchema = new mongoose.Schema({
  image: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  caption: {
    type: String,
    required: true,
  }
});

const PopularSlide = mongoose.model('PopularSlide', popularSlideSchema);

module.exports = PopularSlide;