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

    getPokelist =() => {
        axios.get('https://vschool-cors.herokuapp.com?url=http://pokeapi.co/api/v2/pokemon').then(response => {
            console.log(response)
            this.setState({pokelist: response.data.results})}
        ).catch(err => console.log(err))
    }

    getPokeDetail = url => {
        axios.get(url).then(res => {
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