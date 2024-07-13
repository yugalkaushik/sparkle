const mongoose = require('mongoose');

const textSlideSchema = new mongoose.Schema({
  heading: {
    type: String,
    required: true,
  },
});

const TextSlide = mongoose.model('TextSlide', textSlideSchema);

module.exports = TextSlide;
