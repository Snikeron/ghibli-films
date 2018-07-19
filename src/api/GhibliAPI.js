import axios from './init';

export default {
    fetchFilms,
    fetchPosters,
    fetchPostersB,
    fetchPeople,
    fetchLocations,
    fetchSpecies,
    fetchVehicles,
}

async function fetchFilms() {
    const response = await axios.get('/films')
    const films = response.data
    return films
}

// async function fetchPosters(films) {
//     let posters = []
//     await films.forEach(async (film, index) => {
//         const response = await axios.get(`https://cors-anywhere.herokuapp.com/https://www.omdbapi.com/?apikey=57febbf5&t=${film.title}&y=${film.release_date}`)
//         const poster = response.data.Poster
//         // console.log(index)
//         posters.push(poster)
//     })
//     return posters
// }

/////////////////////////////////
// ASYNC forEach -- THIS WORKS!!
/////////////////////////////////
async function asyncForEach(films, fetch) {
    for (let i=0; i<films.length; i++) {
        await fetch(films[i], i, films)
    }
}

async function fetchPostersB(films) {
    let posters = []
    await asyncForEach(films, async (film) => {
        const response = await axios.get(`https://cors-anywhere.herokuapp.com/https://www.omdbapi.com/?apikey=57febbf5&t=${film.title}&y=${film.release_date}`)
        const poster = response.data.Poster
        posters.push(poster)
    })
    return posters
}
/////////////////////////////////

async function fetchPeople() {
    const response = await axios.get('/people')
    const people = response.data
    return people
}

async function fetchLocations() {
    const response = await axios.get('/locations')
    const locations = response.data
    return locations
}

async function fetchSpecies() {
    const response = await axios.get('/species')
    const species = response.data
    return species
}

async function fetchVehicles() {
    const response = await axios.get('/vehicles')
    const vehicles = response.data
    return vehicles
}