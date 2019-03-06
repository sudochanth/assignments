import React from 'react';
import UglyCard from './UglyCard';
import axios from 'axios';

class UglyList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            inputs: {
                title: '',
                description: '',
                // price: '',
                imgUrl: '',
                searchfield: ''
                // completed: ''
            },
            todos: []
        }
    }

    //Get
    async componentDidMount() {
        const response = await axios.get('https://api.vschool.io/sunny/todo')
        this.setState({
            todos: response.data
        })
    }

    //Post
    handleSubmit = e => {
        e.preventDefault();
        axios.post('https://api.vschool.io/sunny/todo', this.state.inputs).then(response => {
            this.setState(prevState => ({
                todos: [response.data, ...prevState.todos],
                inputs: {
                    title: '',
                    description: '',
                    price: '',
                    imgUrl: '',
                    searchfield: '',
                    completed: ''
                }
            }))
        })
    }

    // Edit/Put
    editTodo = (id, updatedTodo) => { 
        axios.put(`https://api.vschool.io/sunny/todo/${id}`, updatedTodo).then(response => {
            this.setState(prevState => ({
                todos: prevState.todos.map(todo => todo._id === id ? todo = updatedTodo : todo)
            }))
        })
    }

    // Delete
    deleteTodo = id => {
        axios.delete(`https://api.vschool.io/sunny/todo/${id}`).then(response => {
            this.setState(prevState => ({
                todos: prevState.todos.filter(todo => todo._id !== id)
            }))
        })
    }

    handleChange = (e) => {
        let { name, value} = e.target;
        this.setState(prevState => ({
            inputs: {
                ...prevState.inputs,
                [name]: value
            }
        }))
    } 
   
    // onSearch = e => {
    //     this.setState({ searchfield: e.target.value })
    // }

    render() {
        const { todos } = this.state;
        const mappedTodo = todos.map(item => <UglyCard key={item._id} todo={item} editTodo={this.editTodo} deleteTodo={this.deleteTodo} />);

        return (
            <>
            <div id="search">
                <form onSubmit={this.handleSubmit}>
                    <input type="text"
                           name='title'
                           onChange={this.handleChange} 
                           value={this.state.inputs.title} 
                           placeholder="title"/>
                    <input type="text" 
                           name='description' 
                           onChange={this.handleChange} 
                           value={this.state.inputs.description} 
                           placeholder="description"/>
                    <input type="text" 
                           name='imgUrl' 
                           onChange={this.handleChange} 
                           value={this.state.inputs.imgUrl} 
                           placeholder="image"/>
                    <button>Submit</button>
                </form>
                <input type="search" 
                       placeholder="search"
                       onChange={this.onSearch}>
                </input>
            </div>
            <div id="container">{mappedTodo}</div>
            </>
        )

    }
};

export default UglyList;

