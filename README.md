# Ghibli Films Gallery
[https://ghibli-films.now.sh](https://ghibli-films.now.sh)

## Goal

1. Learning to call 2 simultaneous APIs:

    1. Retrieving film data from Ghibli Studios Films
    2. Then fetching Poster images from OMDB with relevant query strings extracted from the first API
2. Practicing React

## APIs

1. (unofficial) [Ghibli Films API](http://ghibliapi.herokuapp.com/) - for Ghibli Films/Characters/Locations
2. [OMDB Film Database](https://omdbapi.com/) - for Poster Images
    - Had to utilise [Heroku's CORS-Anywhere](https://cors-anywhere.herokuapp.com/) to bypass OMDB's cors requirement
    - A custom async forEach function had to be written to fetch posters asynchronously from the film database, otherwise the posters state in react would be populated out of order