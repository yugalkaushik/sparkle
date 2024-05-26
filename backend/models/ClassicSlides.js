const mongoose = require('mongoose');

const classicSlideSchema = new mongoose.Schema({
    title:String,
    image:String,
    caption:String
});

const ClassicSlide = mongoose.model('ClassicSlide', classicSlideSchema);

module.exports = ClassicSlide;