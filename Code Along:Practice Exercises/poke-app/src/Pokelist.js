import React from 'react';
import { Link, Switch, Route } from "react-router-dom";
import {withPoke} from './PokeProvider';
import Pokeshow from './Pokeshow.js'

class Pokelist extends React.Component {
    componentDidMount() {
        this.props.getPokelist();
    }
    
    render() {
        const mappedPokelist = this.props.pokelist.map((pokemon, i) => {
            return <Link key={pokemon.name + i} to={`/Pokelist/${pokemon.name}`}><h1>{pokemon.name}</h1></Link>
        })
        return (
            <div style={{display: 'grid', gridTemplateColumns: '1fr 3fr'}}> 
                <div id='pokecard'>
                <button onClick={this.props.getNext}>Next 20</button>
                    {mappedPokelist}
                </div>
                <Switch>
                    <Route path="/Pokelist/:pokename" component={Pokeshow}/>
                </Switch>
            </div>
        )
    }
}

export default withPoke(Pokelist);







