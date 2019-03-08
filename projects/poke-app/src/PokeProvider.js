import React, { Component } from 'react';
import axios from 'axios';
const { Provider, Consumer } = React.createContext();

class PokeProvider extends Component {
    constructor() {
        super()
        this.state = {
            pokelist: [],
            pokeDetails: {},
            next: ''
        }
    }

    getPokelist = () => {
        axios.get('https://vschool-cors.herokuapp.com?url=http://pokeapi.co/api/v2/pokemon').then(response => {
            console.log(response)
            this.setState({pokelist: response.data.results, next: response.data.next})
        }
        ).catch(err => console.log(err))
    }

    getNext = () => {
        axios.get(`https://vschool-cors.herokuapp.com?url=${this.state.next}`).then(response => {
            console.log(response)
            this.setState({pokelist: response.data.results, next: response.data.next})
        })
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
                getNext: this.getNext,
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