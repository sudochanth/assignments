import React from 'react';
import Pokecard from './Pokecard';
import {withPoke} from './PokeProvider';

class Pokelist extends React.Component {
    componentDidMount() {
        this.props.getPokelist();
        this.props.getPokeDetail(this.props.url)

    }
    
    render() {
        console.log(this.props.pokeList)
        const mappedPokelist = this.props.pokelist.map((pokemon, i) => <Pokecard key={pokemon.name + i} name={pokemon.name} url={pokemon.url} />)
        console.log(this.props.pokelist)
        return (
            <div id='pokecard'>
                {mappedPokelist}
            </div>
        )
        
    }
};

export default withPoke(Pokelist);







