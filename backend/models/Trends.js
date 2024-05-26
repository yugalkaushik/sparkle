const mongoose = require('mongoose');

const trendSchema = new mongoose.Schema({
  imageUrl: {
    type: String,
    required: true,
  },
  text: {
    heading: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
});

const Trend = mongoose.model('Trend', trendSchema);

module.exports = Trend;
