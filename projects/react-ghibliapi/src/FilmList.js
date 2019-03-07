import React, { Component } from 'react';
import Film from './Film';
import './App.css';

import { Link, Switch, Route } from 'react-router-dom';
import { withGhibli } from './GhibliProvider'

class FilmList extends Component {
    componentDidMount() {
        this.props.getFilms();
    }
    render() {
        // console.log(this.props.filmsArray)
        const mappedFilms = this.props.filmsArray.map((film, i) => <Link className='link' key={film.id} to={`/FilmList/${film.id}`}>{film.title}</Link>)
        return (

            <div id='mappedContainer'>
                {mappedFilms}
                <Switch>
                    <Route exact path='/FilmList/:id' component={Film} />
                    {/* <Route exact path='/FilmList/:id' render={props => (
                        <Film film={props} />
                    )} /> */}

                </Switch>
            </div>
        );

    }
};

export default withGhibli(FilmList);


// const mappedFilms = this.props.filmsArray.map((film, i) => {
        //     return(
        //     <Link to={`/films/${film.title}`}>{film.title}</Link>
        //     )
        // })