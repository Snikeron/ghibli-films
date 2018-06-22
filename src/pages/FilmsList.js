import React, { Component } from 'react';
import './FilmsList.css';
import GhibliAPI from '../api/GhibliAPI';
import PosterAPI from '../api/PosterAPI';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';

export default class FilmsList extends Component {
  state = {
    films: null,
    poster: '',
  }

  componentDidMount() {
    GhibliAPI.fetchFilms()
      .then(films => {
        this.setState({
          films: films.films,
          poster: films.posters
        })
      })
      .catch(err => {
        console.error(err)
      })
  }

 
  // async componentDidMount() {
  //   const promise1 = fetch('info')
  //   const promise2 = fetch('images')

  //   const [info, images] = await Promise.all([promse1, promise2])

  //   const films = info.map(i => {
  //     if(i.name === image.name && by year) {
  //       i.image_url = image.url
  //       const film = {
  //         ...i,
  //         ...imgage
  //       }
  //       return film
  //     }

  //     return i
  //   })

  //   this.setState({
  //     films: films
  //   })

  // }

  render() {
    const { films, poster } = this.state;
  
    if (!films) {
      return <h3>Fetching all the Ghibli Films ...</h3>
    } else {
      
    }

    return (
      films.map( film => {
        return (
            <Card>
              <CardImg top width="100%" src={poster.Poster} alt="Card image cap" />
              <CardBody>
              <CardSubtitle>- {film.release_date} -</CardSubtitle>
              <CardTitle>{film.title}</CardTitle>
              <CardText>{film.description}</CardText>
              <CardSubtitle>Rotten Tomatoes: {film.rt_score}%</CardSubtitle>
              {/* <Button>Button</Button> */}
              </CardBody>
            </Card>
          
        )
      })
    )
  }
}
