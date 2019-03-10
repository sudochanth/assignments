import React, { Component } from 'react';
import { withPoke } from './PokeProvider.js'


class Pokeshow extends Component {
    componentWillReceiveProps(nextProps){
        if(nextProps.match.params.pokename !== this.props.match.params.pokename){
            const selectedPoke = this.props.pokelist.find(p => p.name === nextProps.match.params.pokename)
            this.props.getPokeDetail(selectedPoke.url)
        }
    }

    render() {
        return (
            <div>
            {!this.props.pokeDetails.name
                ?   <h1>Select a Pokemon to view</h1>
                :   <div>
                        <h1>Name: {this.props.pokeDetails.name}</h1>
                        <h2>Weight: {this.props.pokeDetails.weight}</h2>
                        <img src={this.props.pokeDetails.sprites.front_default}/>
                        <img src={this.props.pokeDetails.sprites.back_default}/>
                    </div>
            }
            </div>
        )
    }
};

export default withPoke(Pokeshow);