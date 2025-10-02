// src/config/api.js
const API_BASE_URL = process.env.NODE_ENV === 'production' 
  ? 'https://yourapp.azurewebsites.net/api' 
  : 'http://localhost:5000/api';

export default API_BASE_URL;
