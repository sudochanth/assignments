import React, { Component } from 'react';
// import Picture from './Picture';
import Pic1 from './Eric.png';
import Pic2 from './Marcus.png';
import'./App.css'

class App extends Component {
    constructor() {
        super()
        this.state = {
            isTrue: false
        }
    }

    changeIt = () => {
        this.setState((prevState) => {
            return {
                isTrue: !prevState.isTrue
            }
        })
    }

   
    render() {
        let itIs = this.state.isTrue ? 
        <div><h1>Eric</h1><img src={Pic1} alt="Eric"></img></div> : 
        <div><h1>Marcus</h1> <img src={Pic2} alt="Marcus"></img></div>
        return (
            <div>
            <button onClick={this.changeIt}>click</button>
            {itIs}
            </div>
        )
    }
}

export default App;