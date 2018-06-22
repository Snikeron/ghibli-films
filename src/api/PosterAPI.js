import axios from 'axios';

export default {
    fetchPoster,
}

async function fetchPoster(title, year) {
    const response = await axios.get(`http://img.omdbapi.com/?apikey=${process.env.REACT_APP_OMDB_API_KEY}&t=${title}&y=${year}`)
    const films = response.data
    return films
}