import React, { Component } from 'react';
import axios from 'axios';
import './App.css'
const { Provider, Consumer } = React.createContext();



class GhibliProvider extends Component {
    constructor() {
        super()

        this.state = {
            films: []
        }
    }

    getFilms =() => {
        axios.get('https://ghibliapi.herokuapp.com/films').then(response => 
            this.setState({films: response.data})

        ).catch(err => console.log(err))
    }

    render() {
        return (
            <Provider value={{
                getFilms: this.getFilms,
                ...this.state
            }}>
                {this.props.children}
            </Provider>
        )
    }

}

export default GhibliProvider;

export function withGhibli (C) {
    return props => <Consumer>
                        {value => <C {...value}{...props} />}
                    </Consumer>
}