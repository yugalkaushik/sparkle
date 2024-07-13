const mongoose = require ('mongoose');
const { type } = require('os');

const ProductSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    Image:{
        type:String,
        required:true
    }
});

module.exports = mongoose.model('Product', ProductSchema);
