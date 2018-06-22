import axios from 'axios';
export default axios.create({
    baseURL: process.env.REACT_APP_GHIBLI_API_URI
})