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



    getDetail = () => {
        this.props.getPokeDetail(this.props.pokemon.url)
    }

    render() {
        console.log(this.props.pokeDetails)
        // const details = 
        // let {weight, name} = this.state.poke
        return (
            <div id='card' onClick={this.getDetail}>
            click me

                {/* <Link key={poke.id} to={`/Pokelist/${poke.name}`}>                              <h1 onClick={this.getDetail}>{poke.name}</h1>
                </Link> */}
            </div>
        )
    }
}                

export default withPoke(Pokecard);