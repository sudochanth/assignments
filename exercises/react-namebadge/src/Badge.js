import React, { Component } from 'react';
import './App.css';

class Badge extends Component {
    constructor() {
        super()
        this.state = {
            inputs: {
                firstName: '',
                lastName: '',
                email: '',
                birthPlace: '',
                phone: '',
                favFood: '',
                about: '',
            },
            badges: []
        }
    }

    handleChange = e => {
        const { name, value } = e.target
        this.setState(prevState => {
            return {
                inputs: {
                    ...prevState.inputs,
                    [name]: value 
                    // [e.target.name]: e.target.value
                }    
            }
        })
    }
    
    handleSubmit = e => {
        e.preventDefault();
        // const newBadge = this.state.inputs;
        this.setState((prevState) => {
            return {
                badges: [...prevState.inputs, ...prevState.badges]
            }
        })
    }

    render() {
        let { firstName, lastName, email, birthPlace, phone, favFood, about } = this.state
        return (
            <div id="container">
            <form>
                First Name: <input type="text" name="firstName" value={firstName} onChange={this.handleChange}/>
                Last Name: <input type="text" name="lastName" value={lastName} onChange={this.handleChange}/>
                Email: <input type="email" name="email" value={email} onChange={this.handleChange}/>
                Place of birth: <input type="text" name="birthPlace" value={birthPlace} onChange={this.handleChange}/>
                Phone Number: <input type="tel" name="phone" min="7" value={phone} onChange={this.handleChange}/>
                Favorite food: <input type="text" name="favFood" value={favFood} onChange={this.handleChange}/>
                About: <input type="text" name="about" value={about} onChange={this.handleChange}/>
                <button>Submit</button> <button type="reset">Reset</button>
            </form>


            {/* <form>
                First Name: {this.state.firstName}
                Last Name: <input type="text"/>
                Email: <input type="email"/>
                Birthdate: <input type="date"/>
                Phone Number: <input type="number" min="7"/>
                Favorite food: <input type="text"/>
                About: <input type="text"/>
            </form> */}
        </div>
        )
    }
}    

export default Badge;


    // onSubmit = event => {
    //     event.preventDefault();
    //     let userBadge = { firstName, lastName, email, birthPlace, phone, favFood, about }
    //     this.setState((prevState) => {
    //         return ({
    //             badges: [...prevState.badges, userBadge],
    //             firstName: '',
    //             lastName: '',
    //             email: '',
    //             birthPlace: '',
    //             phone: '',
    //             favFood: '',
    //             about: ''
    //         })
    //     })
    // }