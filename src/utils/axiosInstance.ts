import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://personal-portfolio-api-df40.onrender.com/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;
