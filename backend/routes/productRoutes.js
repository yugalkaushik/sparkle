const express = require('express');
const router = express.Router();
const auth = require('../middlewares/authMiddleware');
const Product = require('../models/Product');

router.get('/', async(req,res)=> {
    try{
        const products = await Product.find();
        res.json(products);
    } catch(err){
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

//routes for creating, updating and deleting products will be added here
module.exports = router;
