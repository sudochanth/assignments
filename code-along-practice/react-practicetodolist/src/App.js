import React from 'react';
import Header from './components/layout/Header';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import './App.css';
import uuid from 'uuid';

class App extends React.Component {
	state = {
		todos: [
			{
				id: uuid.v4(),
				title: 'Take out trash',
				completed: false
			},
			{
				id: uuid.v4(),
				title: 'din-din',
				completed: true
			},
			{
				id: uuid.v4(),
				title: 'take over world',
				completed: false
			}
		]
	}
	
	markComplete = (id) => {
		this.setState({
			todos: this.state.todos.map(todo => {
				if (todo.id === id) {
					todo.completed = !todo.completed
				}
				return todo;
			})
		})
	}

	delTodo = (id) => {
		this.setState({ 
			todos: [...this.state.todos.filter(todo => todo.id !== id)]
		})
	}

	addTodo = (title) => {
		const newTodo = {
			id: uuid.v4(),
			title,
			completed: false
		}
		this.setState({ todos: [...this.state.todos, newTodo]})
	}
	render() {
		return (
			<div className='app'>
				<div className="container">
					<Header />
					<AddTodo addTodo={this.addTodo} />
					<Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo} />
				</div>
				
			</div>
		)

	}
}

export default App;