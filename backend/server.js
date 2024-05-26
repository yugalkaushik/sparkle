const express = require('express');
const connectDB = require('./config/db');
const dotenv = require('dotenv');q

dotenv.config();

const app = express();
connectDB;

app.use(express.json());

app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/products', require('./routes/productRoutes'));
app.use('/api/discoverslides', require('./routes/discoverSlidesRoutes'));
app.use('/api/exclusive', require('./routes/exclusiveRoutes'));
app.use('/api/mainimage', require('./routes/mainImageRoutes'));
app.use('/api/navlinks', require('./routes/navLinkRoutes'));
app.use('/api/popular', require('./routes/popularSlideRoutes'));
app.use('/api/slides', require('./routes/slideTextRoutes'));
app.use('/api/trends', require('./routes/trendRoutes'));

const PORT =process.env.PORT || 5100;
app.listen(PORT, ()=> console.log('Server started on port ${PORT}'));