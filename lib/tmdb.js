// Import dotenv to load environment variables
require('dotenv').config();

import axios from 'axios';

// Use the environment variable
const API_KEY = process.env.TMDB_API_KEY;

// Create an instance of axios with the base URL and API key
const tmdbApi = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    params: {
        api_key: API_KEY,
    },
});

// Export the axios instance for use in your components
export default tmdbApi;
