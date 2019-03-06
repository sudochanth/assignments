import React from 'react';
import './App.css';

class UglyCard extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            edit: true,
            todos: []
        }
    }

    toggle = () => {
        this.setState(prevState => ({
            edit: !prevState.edit
        }))
    }
    
    handleChange = (e) => {
        let { name, value } = e.target;
        this.setState({[name]: value})
    }

    handleSubmit = (e, id) => {
        e.preventDefault();
        let { title, description, imgUrl } = this.state;
        const updatedTodo = { title, description, imgUrl };
        this.props.editTodo(id, updatedTodo);
    }
    render() {
        let { todo, deleteTodo } = this.props;
        return (
            <>
                { this.state.edit ?
                    <div id="card">
                        <h1>{todo.title}</h1>
                        <h3>{todo.description}</h3>
                        <img alt={todo.title} src={todo.imgUrl} />
                        <br></br>
                        <button onClick={this.toggle}>Edit</button>
                        <button onClick={() => deleteTodo(todo._id)}>Delete</button>
                    </div>
                    :
                    <form id="editedForm" onSubmit={(e) => this.handleSubmit(e, todo._id)}>
                    <input type="text"
                           name='title'
                           onChange={this.handleChange} 
                           value={this.state.title} 
                           placeholder="title"/>
                    <input type="text" 
                           name='description' 
                           onChange={this.handleChange} 
                           value={this.state.description} 
                           placeholder="description"/>
                    <input type="text"
                           name='imgUrl'
                           onChange={this.handleChange} 
                           value={this.state.imgUrl} 
                           placeholder="image"/>       
                           <button>Save</button>
                           <button onClick={this.toggle}>Cancel</button>

                    </form>
                }
            </>

        )
    }
} 

export default UglyCard;