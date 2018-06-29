import React, { Component } from 'react';
import './FilmsList.css';
import GhibliAPI from '../api/GhibliAPI';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle } from 'reactstrap';

export default class FilmsList extends Component {
  state = {
    films: null,
    posters: null,
  }

  componentDidMount() {
    GhibliAPI.fetchFilms()
      .then(films => {
        this.setState({
          films: films
        })
        return films;
      })
      .then(films => {
        GhibliAPI.fetchPostersB(films)
          .then(posters => {
            this.setState({
              posters: posters
            })
            return posters;
          })
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
    const { films, posters } = this.state;
    if (!films) {
      return <h3>Fetching all the Ghibli Films ...</h3>
    } else if (!posters) {
      return <h3>Fetching poster images ...</h3>
    } else {
      return (
        films.map( (film, index) => {
          // console.log(this.state)
          console.log(posters)
          console.log(posters.length)
          // console.log(posters[10])

          return (
            <Card key={index}>
              <CardImg top width="100%" src={posters[index]} alt="Card image cap" />
              {console.log(posters[index])}
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
}
