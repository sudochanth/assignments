import React from 'react';
import Pet from './Pet';
import './App.css'

{}
const Friend = (props) => {

    const mappedPets = props.pets.map((pet, i) => {
        return (
            <Pet
                name={pet.name}
                breed={pet.breed}
                key={i+pet.name}
            />
        )
    })

    return (
        <div id="friend">
            <h1 id="friendName">{props.name}</h1>
            <h2>{props.age}</h2>
            {mappedPets}
        </div>
    )
}

export default Friend;