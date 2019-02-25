// import React, {Component} from 'react';

// class App extends Component {
//     constructor() {
//         super()
        
//         this.state = {
//             counter: 50
//         }
//     }

//     subtract = () => {
//         this.setState((prevState) => {
//             return {
//                 counter: prevState.counter - 1
//             }
//         })
//     }

//     render() {
//         return (
//             <div>
//                 <h1>Counter: {this.state.counter}</h1>
//                 <button onClick={this.subtract}> - </button>
//             </div>    
//         )
//     }
// }


// export default App;




import React, {Component} from 'react';

class App extends Component {
    constructor(){
        super()
        console.log(this)

        this.state = {
            counter: 3
        }

    }
    
    add = () => {
        this.setState((prevState) => {
            return {
                counter: prevState.counter + 1
            }
        })
    }

    subtract = () => {
        this.setState((prevState) => {
            return {
                counter: prevState.counter - 1
            }
        })
    }

    reset = () => {
        this.setState({counter: 0})
    }

    render(){
        return (
            <div>
                Hello
                <h1>Counter: {this.state.counter}</h1>
                <button onClick={this.add}>+</button>
                <button onClick={this.subtract}>-</button>
                <button onClick={this.reset}>reset</button>
            </div>
        )
    }
}

export default App







// import React from 'react'

// const App = () => {
//     console.log(React.Component)
//     return (
//         <div>
//             Hello
//         </div>
//     )
// }

// export default App

// Stateless Component or a Functional Component