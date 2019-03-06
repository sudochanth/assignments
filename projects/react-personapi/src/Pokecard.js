import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import {withPoke} from './PokeProvider';

class Pokecard extends Component {
    constructor(){
        super()

        this.state ={
            poke: {}
        }
    }

    componentDidMount(){
      this.props.getPokeDetail(this.props.url)
    }

    render() {
        console.log(this.props)
        const details = this.props.pokeDetails.map(poke => <Link key={poke.id} to={`/Pokelist/${poke.name}`}>
                                                                <h1>{poke.name}</h1>
                                                           </Link>)
        return (
            <div >
                {details}
            </div>
        )
    }
}

// {details}
                

export default withPoke(Pokecard);