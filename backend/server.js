const express = require('express');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const cors = require('cors');
const User = require('./models/User');
const productRoutes = require('./routes/productRoutes');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5100;

const corsOptions = {
    origin: 'http://localhost:5173',
    optionsSuccessStatus: 200
};

// Middleware
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true })); 
app.use('/api/products', productRoutes); 

// Login endpoint
app.post('/login', async (req, res, next) => {
    let { email, password } = req.body;

    let existingUser;
    try {
        existingUser = await User.findOne({ email: email });
    } catch {
        const error = new Error('Error! Something went wrong.');
        return next(error);
    }
    if (!existingUser || existingUser.password != password) {
        const error = new Error('Incorrect email or password');
        return next(error);
    }
    let token;
    try {
        token = jwt.sign(
            {
                userId: existingUser.id,
                email: existingUser.email
            },
            process.env.JWT_SECRET,
            { expiresIn: '1h' }
        );
    } catch (err) {
        console.log(err);
        const error = new Error('Error! Something went wrong.');
        return next(error);
    }

    res.status(200).json({
        success: true,
        data: {
            userId: existingUser.id,
            email: existingUser.email,
            token: token
        }
    });
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
    } catch {
        const error = new Error('Error! Something went wrong.');
        return next(error);
    }

    let token;
    try {
        token = jwt.sign(
            {
                userId: newUser.id,
                email: newUser.email
            },
            process.env.JWT_SECRET,
            { expiresIn: '1h' }
        );
    } catch (err) {
        const error = new Error('Error! Something went wrong.');
        return next(error);
    }

    res.status(201).json({
        success: true,
        data: {
            userId: newUser.id,
            email: newUser.email,
            token: token
        }
    });
});

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log('Connected to MongoDB');
        // Start the server
        app.listen(PORT, () => {
            console.log(`Server is listening on port ${PORT}`);
        });
    })
    .catch((err) => {
        console.error('Error connecting to MongoDB:', err);
    });

app.use('/api/products', require('./routes/productRoutes'));
app.use('/api/navlinks', require('./routes/navLinkRoutes'));
app.use('/api/mainimage', require('./routes/mainImageRoutes'));
app.use('/api/trend', require('./routes/trendRoutes'));
app.use('/api/discover', require('./routes/discoverSlidesRoutes'));
app.use('/api/popular', require('./routes/popularSlideRoutes'));
app.use('/api/exclusive', require('./routes/exclusiveRoutes'));
app.use('/api/classic', require('./routes/classicSlidesRoutes'));
