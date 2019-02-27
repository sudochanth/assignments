import React, { Component} from 'react';

class App extends Component {
    constructor() {
        super()
        this.state = {
            firstName: '',
            lastName: '',
            names: []
        }
    }

    handleChange = event => {
        event.preventDefault();
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    
    handleSubmit = e => {
        e.preventDefault();
        let newName = `${this.state.firstName} ${this.state.lastName}`;
        this.setState((prevState) => {
            return ({
                names: [...prevState.names, newName],
                firstName: '',
                lastName: ''
            })
        })
       
    }

    render() {
        const mappedNames = this.state.names.map((name, i) => {
            return (
                <li key={i+name}>
                    {name}
                </li>
            )
        }) 

        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input name="firstName" value={this.state.firstName} placeholder="First Name" onChange={this.handleChange}/>
                    <input name="lastName" value={this.state.lastName} placeholder="Last Name" onChange={this.handleChange}/>
                    <h1>{this.state.firstName} {this.state.lastName}</h1>
                    <button>click here</button>
                    <ol>
                        {mappedNames}
                    </ol>
                </form>
            </div>
        )
    }
}

export default App;