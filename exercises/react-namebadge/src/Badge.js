import React, { Component } from 'react';
import UserBadge from './UserBadge';
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
                // backgroundColor: ''
            },
            badges: []
        }
    }

    // updates states with value
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
    
    // changeColor = () => {
    //     this.setState((prevState) => {
    //         if (prevState.backgroundColor === "pink") {
    //             return {
    //                 backgroundColor: "blue" 
    //             }
    //         }
    //     })
    // }

    handleSubmit = e => {
        e.preventDefault();
        // this.state.changeColor();
        // const newBadge = this.state.inputs;
        this.setState((prevState) => {
            return {
                badges: [prevState.inputs, ...prevState.badges],
                inputs: {
                    firstName: '',
                    lastName: '',
                    email: '',
                    birthPlace: '',
                    phone: '',
                    favFood: '',
                    about: ''
                }
            }
        })
    }

    render() {
        let { firstName, lastName, email, birthPlace, phone, favFood, about } = this.state.inputs;

        const mappedBadges = this.state.badges.map((badge, i) => <UserBadge key={i+badge.firstName} badge={badge} /> )
        return (
            <React.Fragment>
            <form id="container" onSubmit={this.handleSubmit}>
                <input type="text" placeholder="First Name" name="firstName" value={firstName} onChange={this.handleChange} required/>
                <input type="text" placeholder="Last Name" name="lastName" value={lastName} onChange={this.handleChange} required/>
                <input type="email" placeholder="Email" name="email" value={email} onChange={this.handleChange} required/>
                <input type="text" placeholder="Birth Place" name="birthPlace" value={birthPlace} onChange={this.handleChange} required/>
                <input type="tel" placeholder="Phone Number" name="phone" min="7" value={phone} onChange={this.handleChange} required/>
                <input type="text" placeholder="Favorite Food" name="favFood" value={favFood} onChange={this.handleChange} required/>
                <textarea id="aboutMe" style={{height: '100px'}} rows="auto" placeholder="Tell us about yourself"type="text" name="about" value={about} onChange={this.handleChange} required/>
                <button>Submit</button>
            </form>
            <br></br>
            {mappedBadges}
            <br></br>

        </React.Fragment>
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