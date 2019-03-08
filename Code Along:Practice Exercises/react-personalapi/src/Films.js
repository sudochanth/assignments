import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import {withGhibli} from './GhibliProvider'
import FilmCard from './FilmCard';
import './App.css'


class Films extends React.Component {
    componentDidMount() {
        this.props.getFilms();
    }

    render() {
        console.log(this.props.films)
        const mappedFilms = this.props.films.map((film, i) => <Link id='eachCard' key={film.title+i} to={`/films/${film.id}`}>{film.title}</Link>)

        return (
            <div id='cards'>
                {mappedFilms}
                
                <Switch>
                    <Route exact path='/products/:id' component={FilmCard} />
                </Switch>
            </div>
        );

    }
};

export default withGhibli(Films);