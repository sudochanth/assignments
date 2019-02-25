import React from 'react';
import './App.css'

const Pet = (props) => {
    return (
        <div>
            <h2 id="petName">{props.name}</h2>
            <h3 id="petInfo">{props.breed}</h3>
        </div>
    )
}

export default Pet;