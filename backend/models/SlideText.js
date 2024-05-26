const mongoose = require('mongoose');

const slideTextSchema = new mongoose.Schema({
  heading: {
    type: String,
    required: true,
  },
});

const SlideText = mongoose.model('SlideText', slideTextSchema);

module.exports = SlideText;
