const express = require('express');
const Product = require('../models/Product');
const upload = require('../middlewares/upload');
const bucket = require('../config/firebase');
const { v4: uuidv4 } = require('uuid');

const router = express.Router();

router.post('/add', upload.array('images', 10), async (req, res) => {
    const { name, price, description, gender, category } = req.body;
    const files = req.files; 
    // console.log('Received files:', files);

    try {
        const imageUrls = [];

        if (files && files.length > 0) {
            for (const file of files) {
                const blob = bucket.file(`${uuidv4()}-${file.originalname}`);
                const blobStream = blob.createWriteStream({
                    metadata: {
                        contentType: file.mimetype,
                    },
                });

                await new Promise((resolve, reject) => {
                    blobStream.on('error', (err) => {
                        console.error('Blob Stream Error:', err);
                        reject(err);
                    });
                    blobStream.on('finish', () => {
                        const publicUrl = `https://storage.googleapis.com/${bucket.name}/${blob.name}`;
                        imageUrls.push(publicUrl);
                        resolve();
                    });
                    blobStream.end(file.buffer);
                });
            }
        }

        const newProduct = new Product({
            name,
            price,
            description,
            gender,
            category,
            images: imageUrls
        });
        await newProduct.save();
        res.status(201).json(newProduct);
    } catch (error) {
        console.error('Error saving product:', error);
        res.status(400).json({ message: error.message });
    }
});

module.exports = router;
