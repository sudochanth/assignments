import React from 'react';
import {withBounty} from './BountyProvider'

class CreateNewBounty extends React.Component {

	constructor(){
		super()
		this.state = {
			firstName: '',
			lastName: '',
			living: '',
			amount: '',
			type: ''
		}
	}

	handleChange = (e) => {
		console.log(e.target.value);
		e.preventDefault();
				let { name, value } = e.target;
				this.setState({[name]: value})
	}

	handleSubmit = (e) => {
		e.preventDefault();
		this.props.addBounties(this.state);
	}
	
	render(){
		console.log(this.state)
  	return (
			<div style={{display: "flex", justifyContent: "center"}}>
				<form onSubmit={this.handleSubmit} style={{border: "2px solid black", padding: '10px'}}>
          <label>First Name:<input type='text'
								 name='firstName'
                 onChange={this.handleChange}
                 value={this.state.firstName}
                 placeholder='first name'
          /></label> <br/>
          <label>Last Name:<input type='text'
                 name='lastName'
								 onChange={this.handleChange}
                 value={this.state.lastName}
                 placeholder='last name'
          /></label> <br/>
          {/* <label>Dead or Alive:<input type='radio'
                 name='living'
								 onChange={this.handleChange}
                 value='Dead'
                 placeholder='is alive?'
          /> Alive
          <input type='radio'
                 name='living'
								 onChange={this.handleChange}
                 value='Living'
                 placeholder='is alive?'
          /> Dead</label> <br/> */}
          <label>Bounty Amount:<input type='number'
                 name='amount'
								 onChange={this.handleChange}
                 value={this.state.amount}
                 placeholder='bounty amount'
          /></label> <br/>
          <label>Type:<input type='text'
                 name='type'
								 onChange={this.handleChange}
                 value={this.state.type}
                 placeholder='type'
          /></label> <br/>
          <button>Submit</button>
        </form>
			</div>
    )
  }
}

export default withBounty(CreateNewBounty);














