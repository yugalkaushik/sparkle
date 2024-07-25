const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const cors = require('cors');
const User = require('./models/User');
const productRoutes = require('./routes/productRoutes');
const navLinkRoutes = require('./routes/navLinkRoutes');
const mainImageRoutes = require('./routes/mainImageRoutes');
const trendRoutes = require('./routes/trendRoutes');
const discoverSlidesRoutes = require('./routes/discoverSlidesRoutes');
const popularSlideRoutes = require('./routes/popularSlideRoutes');
const exclusiveRoutes = require('./routes/exclusiveRoutes');
const classicSlidesRoutes = require('./routes/classicSlidesRoutes');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5100;

app.use(express.static(path.join(__dirname, 'public')));

const corsOptions = {
    origin: ['https://sparkle-two.vercel.app', 'http://localhost:5173'],
    methods: 'GET,POST,PUT,DELETE',
    allowedHeaders: ['Content-Type', 'Origin', 'X-Requested-With', 'Accept', 'x-client-key', 'x-client-token', 'x-client-secret', 'Authorization'],
    optionsSuccessStatus: 200
};

// Middleware
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('Welcome to the backend server!');
}); 

// Routes
app.use('/api/products', productRoutes);
app.use('/api/navlinks', navLinkRoutes);
app.use('/api/mainimage', mainImageRoutes);
app.use('/api/trend', trendRoutes);
app.use('/api/discover', discoverSlidesRoutes);
app.use('/api/popular', popularSlideRoutes);
app.use('/api/exclusive', exclusiveRoutes);
app.use('/api/classic', classicSlidesRoutes);

// Login endpoint
app.post('/login', async (req, res, next) => {
    const { email, password } = req.body;

    try {
        const existingUser = await User.findOne({ email });
        if (!existingUser || existingUser.password !== password) {
            const error = new Error('Incorrect email or password');
            error.statusCode = 401;
            return next(error);
        }

        const token = jwt.sign(
            {
                userId: existingUser.id,
                email: existingUser.email
            },
            process.env.JWT_SECRET,
            { expiresIn: '1h' }
        );

        res.status(200).json({
            success: true,
            data: {
                userId: existingUser.id,
                email: existingUser.email,
                token
            }
        });
    } catch (err) {
        const error = new Error('Error! Something went wrong.');
        return next(error);
    }
});

// Signup endpoint
app.post('/signup', async (req, res, next) => {
    const { name, email, password, gender } = req.body;

    const newUser = new User({
        name,
        email,
        password,
        gender
    });

    try {
        await newUser.save();

        const token = jwt.sign(
            {
                userId: newUser.id,
                email: newUser.email
            },
            process.env.JWT_SECRET,
            { expiresIn: '1h' }
        );

        res.status(201).json({
            success: true,
            data: {
                userId: newUser.id,
                email: newUser.email,
                token
            }
        });
    } catch (err) {
        const error = new Error('Error! Something went wrong.');
        return next(error);
    }
});

// Error handling middleware
app.use((error, req, res, next) => {
    res.status(error.statusCode || 500).json({
        message: error.message || 'An unknown error occurred!'
    });
});

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log('Connected to MongoDB');
        app.listen(PORT, () => {
            console.log(`Server is listening on port ${PORT}`);
        });
    })
    .catch((err) => {
        console.error('Error connecting to MongoDB:', err);
    });
