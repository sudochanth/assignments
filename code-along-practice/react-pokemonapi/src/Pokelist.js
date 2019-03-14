import React from 'react';
import Pokecard from './Pokecard';
import { Link, Switch, Route } from "react-router-dom";
import {withPoke} from './PokeProvider';
import Pokeshow from './Pokeshow';

class Pokelist extends React.Component {
    componentDidMount() {
        this.props.getPokelist();
    }
    
    render() {
        const mappedPokelist = this.props.pokelist.map((pokemon, i) => {
            return <Link style={{textDecoration: 'none'}} key={pokemon.name + i} to={`/Pokelist/${pokemon.name + i}`}><h1>{pokemon.name}</h1></Link>
        })
        return (
            <div id='pokecard'>
                {mappedPokelist}
                <Switch>
                    <Route exact path='/Pokelist/:pokename' component={Pokeshow} />
                </Switch>
            </div>
        )
        
    }
};

export default withPoke(Pokelist);







