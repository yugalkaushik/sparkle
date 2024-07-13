const mongoose = require('mongoose');

const exclusiveSchema = new mongoose.Schema({
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
  buttonText: {
    type: String,
    required: true
  }
});

const Exclusive = mongoose.model('Exclusive', exclusiveSchema);

module.exports = Exclusive;