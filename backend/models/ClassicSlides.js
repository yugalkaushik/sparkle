const mongoose = require('mongoose');

const classicSlideSchema = new mongoose.Schema({
    title:String,
    image:String,
    caption:String
});

const ClassicSlides = mongoose.model('ClassicSlide', classicSlideSchema);

module.exports = ClassicSlides;
