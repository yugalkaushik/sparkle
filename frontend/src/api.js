import axios from 'axios';

const api = axios.create({
    baseURL:'https://sparkle-fxjd.onrender.com/api' || 'http://localhost:5100/api'
});

export default api;
