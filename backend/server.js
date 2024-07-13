const express = require('express');
const connectDB = require('./config/db');
const dotenv = require('dotenv');
const cors = require('cors');
const path = require('path');

dotenv.config();

const app = express();
connectDB();

app.use(cors());
app.use(express.json());

app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/products', require('./routes/productRoutes'));
app.use('/api/navlinks', require('./routes/navLinkRoutes'));
app.use('/api/textslides', require('./routes/textSlideRoutes'))
app.use('/api/mainimage', require('./routes/mainImageRoutes'));
app.use('/api/trend', require('./routes/trendRoutes'));
app.use('/api/discover', require('./routes/discoverSlidesRoutes'));
app.use('/api/popular', require('./routes/popularSlideRoutes'));
app.use('/api/exclusive', require('./routes/exclusiveRoutes'));
app.use('/api/classic', require('./routes/classicSlidesRoutes'));

const PORT =process.env.PORT || 5100;
app.listen(PORT, ()=> console.log(`Server started on port ${PORT}`));