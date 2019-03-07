import React from 'react';
import './App.css';

import { withGhibli } from './GhibliProvider';

const Film = (props) => {
    // console.log(props)
    let { id } = props.match.params
    const card =  props.filmsArray.find(film => {
        return film.id === id
    })

    console.log(props)
    // console.log(card)
    return (
        <div>
           { card ? <div><h1>{card.title}</h1> <h1>{card.description}</h1></div> : "no title yet" }
        </div>
    );
};

export default withGhibli(Film);