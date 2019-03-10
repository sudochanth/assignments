import React from 'react';
import Pokecard from './Pokecard';
import { Link } from "react-router-dom";
import {withPoke} from './PokeProvider';

class Pokelist extends React.Component {
    componentDidMount() {
        this.props.getPokelist();
        // this.props.getPokeDetail(this.props.url)
    }
    
    render() {
        // console.log(this.props.pokeList)
        const mappedPokelist = this.props.pokelist.map((pokemon, i) => {
            return <Link key={pokemon.name + i} to={`/Pokelist/${pokemon.name + i}`}><h1>{pokemon.name}</h1></Link>
        })
        return (
            <div id='pokecard'>
                {mappedPokelist}
            </div>
        )
        
    }
};

export default withPoke(Pokelist);







