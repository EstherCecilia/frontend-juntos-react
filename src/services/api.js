import axios from 'axios';
const api = axios.create({
    baseURL: 'https://api-edu.herokuapp.com/',
});

export default api;