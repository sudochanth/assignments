import React from 'react';
import {withBounty} from './BountyProvider'

class CreateNewBounty extends React.Component {

	constructor(){
		super()
		this.state = {
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
								 name='fName'
								 _id=''
                 onChange={this.handleChange}
                 value={this.state.fName}
                 placeholder='first name'
          /></label> <br/>
          <label>Last Name:<input type='text'
                 name='lName'
								 _id=''
								 onChange={this.handleChange}
                 value={this.state.lName}
                 placeholder='last name'
          /></label> <br/>
          <label>Dead or Alive:<input type='radio'
                 name='living'
								 _id=''
								 onChange={this.handleChange}
                 value={this.state.isAlive}
                 placeholder='is alive?'
          /> Alive
          <input type='radio'
                 name='living'
								 _id=''
								 onChange={this.handleChange}
                 value={this.state.isAlive}
                 placeholder='is alive?'
          /> Dead</label> <br/>
          <label>Bounty Amount:<input type='number'
                 name='amount'
								 _id=''
								 onChange={this.handleChange}
                 value={this.state.amount}
                 placeholder='bounty amount'
          /></label> <br/>
          <label>Type:<input type='text'
                 name='type'
								 _id=''
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














