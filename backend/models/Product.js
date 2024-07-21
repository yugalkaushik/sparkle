const mongoose = require ('mongoose');

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
    gender:{
        type:String,
        required:true
    },
    category:{
         type: String,
          required: true
    },
    images:[{type: String}]
});

module.exports = mongoose.model('Product', ProductSchema);
