// models/MainImage.js
const mongoose = require('mongoose');

const mainImageSchema = new mongoose.Schema({
  imageUrl: {
    type: String,
    required: true
  },
  heading: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  caption: {
    type: String,
    required: true
  }
});


const MainImage = mongoose.model('MainImage', mainImageSchema);

module.exports = MainImage;
