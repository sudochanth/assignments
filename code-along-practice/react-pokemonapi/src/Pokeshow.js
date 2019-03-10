import React, { Component } from 'react';


class Pokeshow extends Component {
    constructor(){
        super()
        this.state ={
            poke: {}
        }
    }

    componentDidMount(){
    // loop through props.pokelist.find to finde pokename === this.props.match.params.name
    // let list = this.props.pokelist.find(this.state.poke.name === this.props.match.params.name);

    // get request to the url of that pokemon
    // save response in state
    // display state in return
    }

    render() {
        // console.log(this.props.match.params.name)
        return (
            <div>

            </div>
        )
    }
};

export default Pokeshow;