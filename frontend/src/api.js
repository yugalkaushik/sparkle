import axios from 'axios';

const api = axios.create({
    baseURL:'https://sparkle-fxjd.onrender.com/api'
});

export default api;
