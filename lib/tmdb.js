// Import dotenv to load environment variables
require('dotenv').config();

import axios from 'axios';

// Use the environment variable
const API_KEY = "9a3220c257be02bb9a7e5f9e33df4df1";

// Create an instance of axios with the base URL and API key
const tmdbApi = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    params: {
        api_key: API_KEY,
    },
});

// Export the axios instance for use in your components
export default tmdbApi;
