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
          films
        })
      })
      .catch(err => {
        console.error(err)
      })
  }

  render() {
    const { films } = this.state;
      
    if (!films) return <h3>Fetching all the Ghibli Films ...</h3>
      
    return (
      films.map( film => {
        return (
            <Card>
              <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
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
