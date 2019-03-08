import React, { Component } from 'react';
import axios from 'axios';
const { Provider, Consumer } = React.createContext();

class PokeProvider extends Component {
    constructor() {
        super()

        this.state = {
            pokelist: [],
            pokeDetails: ''
        }
    }


  // axios.get('http://pokeapi.co/api/v2/pokemon').then(function response(response){ 
    //         this.setState({pokelist: response.data.results})
    //         const mappedPokelist = response.data.results.map(function detail(pokemon, i){
    //         <Pokecard key={pokemon.name + i} name={pokemon.name} url={pokemon.url} />
    //         this.getPokeDetail(pokemon.url)})}
    //     ).catch(err => console.log(err))

    getPokelist =() => {
        axios.get('http://pokeapi.co/api/v2/pokemon').then(response => 
            this.setState({pokelist: response.data.results})
        ).catch(err => console.log(err))
    }

    getPokeDetail = url => {
        axios.get(url).then(res => {
            console.log(res.data)
            this.setState(prevState => ({
                pokeDetails: res.data
            }))
        })
    }




    render() {
        return (
            <Provider value={{
                getPokelist: this.getPokelist,
                getPokeDetail: this.getPokeDetail,
                ...this.state
            }}>
                {this.props.children}
            </Provider>
        )
    }

}

export default PokeProvider;

export function withPoke (C) {
    return props => <Consumer>
                        {value => <C {...value}{...props} />}
                    </Consumer>
}