import React, { Component } from 'react';
import './App.css'

class App extends Component {
    constructor() {
        super()
        this.state = {
            box1: "white",
            box2: "white",
            box3: "white",
            box4: "white"
        }
    }

    blue = () => {
        this.setState(prevState => {
            if(prevState.isBlue) {
                return {
                    box1: "white",
                    box2: "white",
                    box3: "white",
                    box4: "white",
                    isBlue: false
                }
            } else {
                return {
                    box1: "blue",
                    box2: "blue",
                    box3: "blue",
                    box4: "blue",
                    isBlue: true 
                }
            }
            
            
        })
        
    }
   
    pink = () => {
        this.setState({
            box1: "pink",
            box2: "pink"
        })
    }

    green1 = () => {
        this.setState({
            box3: "green"
        })
    }

    green2 = () => {
        this.setState({
            box4: "lightgreen"
        })
    }
    red = () => {
        this.setState({
            box3: "red"
        })
    }
    yellow = () => {
        this.setState({
            box4: "yellow"
        })
    }
    orange = () => {
        this.setState({
            box2: "orange"
        })
    }
    black = () => {
        this.setState({
            box1: "black"
        })
    }

    render() {

        const box1 = {
            backgroundColor: this.state.box1
        }
        const box2 = {
            backgroundColor: this.state.box2
        }
        const box3 = {
            backgroundColor: this.state.box3
        }
        const box4 = {
            backgroundColor: this.state.box4
        }

        return (
            <div>
                <div id="grid">
                    <div style={box1} className="box"></div>
                    <div style={box2} className="box"></div>
                    <div style={box3} className="box"></div>
                    <div style={box4} className="box"></div>
                </div>
                <button onClick={this.blue}>click here for blue</button>
                <button onClick={this.pink}>click here for pink(top two)</button>
                <button onClick={this.green1}>click here for green(bottom left)</button>
                <button onClick={this.green2}>click here for green, again!(bottom right)</button>
                <button onClick={this.red}>click here for red</button>
                <button onClick={this.yellow}>click here for yellow</button>
                <button onClick={this.orange}>click here for orange</button>
                <button onClick={this.black}>click here for black</button>
            </div>    
        )
    }
}

export default App;