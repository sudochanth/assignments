// import React from 'react';
// import UglyCard from './UglyCard';
// import axios from 'axios';

// class UglyList extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             inputs: {
//                 title: '',
//                 description: '',
//                 // price: '',
//                 imgUrl: '',
//                 searchfield: ''
//                 // completed: ''
//             },
//             todos: []
//         }
//     }

//     //Get
//     async componentDidMount() {
//         const response = await axios.get('https://api.vschool.io/sunny/todo')
//         this.setState({
//             todos: response.data
//         })
//     }

//     //Post
//     handleSubmit = e => {
//         e.preventDefault();
//         axios.post('https://api.vschool.io/sunny/todo', this.state.inputs).then(response => {
//             this.setState(prevState => ({
//                 todos: [response.data, ...prevState.todos],
//                 inputs: {
//                     title: '',
//                     description: '',
//                     price: '',
//                     imgUrl: '',
//                     searchfield: '',
//                     completed: ''
//                 }
//             }))
//         })
//     }

//     // Edit/Put
//     editTodo = (id, updatedTodo) => { 
//         axios.put(`https://api.vschool.io/sunny/todo/${id}`, updatedTodo).then(response => {
//             this.setState(prevState => ({
//                 todos: prevState.todos.map(todo => todo._id === id ? todo = updatedTodo : todo)
//             }))
//         })
//     }

//     // Delete
//     deleteTodo = id => {
//         axios.delete(`https://api.vschool.io/sunny/todo/${id}`).then(response => {
//             this.setState(prevState => ({
//                 todos: prevState.todos.filter(todo => todo._id !== id)
//             }))
//         })
//     }

//     handleChange = (e) => {
//         let { name, value} = e.target;
//         this.setState(prevState => ({
//             inputs: {
//                 ...prevState.inputs,
//                 [name]: value
//             }
//         }))
//     } 
   
//     // onSearch = e => {
//     //     this.setState({ searchfield: e.target.value })
//     // }

//     render() {
//         const { todos } = this.state;
//         const mappedTodo = todos.map(item => <UglyCard key={item._id} todo={item} editTodo={this.editTodo} deleteTodo={this.deleteTodo} />);

//         return (
//             <>
//             <div id="search">
//                 <form onSubmit={this.handleSubmit}>
//                     <input type="text"
//                            name='title'
//                            onChange={this.handleChange} 
//                            value={this.state.inputs.title} 
//                            placeholder="title"/>
//                     <input type="text" 
//                            name='description' 
//                            onChange={this.handleChange} 
//                            value={this.state.inputs.description} 
//                            placeholder="description"/>
//                     <input type="text" 
//                            name='imgUrl' 
//                            onChange={this.handleChange} 
//                            value={this.state.inputs.imgUrl} 
//                            placeholder="image"/>
//                     <button>Submit</button>
//                 </form>
//                 <input type="search" 
//                        placeholder="search"
//                        onChange={this.onSearch}>
//                 </input>
//             </div>
//             <div id="container">{mappedTodo}</div>
//             </>
//         )

//     }
// };

// export default UglyList;




import React from 'react';
import Profile from './Profile'

import React, { Component } from 'react'

export default class DisplayServices extends Component {
  constructor() {
    super()

  }

  //function to go to profile. send results to function
  // () => {<Profile result={this.props.result}
  //
  render() {
    let { minCost, maxCost, service, serviceType } = props.result
    let { firstName, lastName, businessName, city, state } = props.result.swapper[0]
    let result = props.result
    return (
      <div onClick={}>
      <div>{serviceType}</div>
      <div>{service}</div>
      <div>{firstName} {lastName}</div>
      <div>{minCost}-{maxCost}</div>
      <div>{businessName}</div>
      <div>{city}, {state}</div>
    </div>
    )
  }
}


// sunny
// every prop in its own div (except f/l name, cost)
// profile comp shows everything (except id, v)
// on click on parent div, set props in thing

// img service type ternary
