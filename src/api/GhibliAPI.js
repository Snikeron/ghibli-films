import axios from './init';

export default {
    fetchFilms,
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