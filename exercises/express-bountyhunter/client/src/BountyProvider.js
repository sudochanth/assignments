import React from 'react';
import axios from 'axios';
const { Provider, Consumer } = React.createContext();

class BountyProvider extends React.Component {
  constructor() {
    super()
    this.state = {
      bounties: []
    }   
  }

  // GET
  getBounties = () => {
    axios.get(`/bounties`)
    .then(response => {
      console.log(response.data);
      this.setState({
        bounties: response.data
      })
    })
  }

  // GET One Object
  // getOne = () => {
  //   axios.get(`/bounties/${_id}`, )
  // }

  // POST
  addBounties = (newBounty) => {
    axios.post('/bounties', newBounty)
    .then(response => {
      console.log(`new bounty ${response.data}`)
      this.setState(prevState => ({
        bounties: [...prevState.bounties, response.data]
      }))
    })
  }

  // PUT
  editBounties = (_id, updatedBounty) => {
    axios.put(`/bounty/${_id}`, updatedBounty)
    .then(response => {
      const updatedB = response.data;
      this.setState(prevState => ({
        bounties: prevState.bounties.map(bounty => bounty._id === _id ? updatedB : bounty)
      }))
    })
    .catch(err => console.log(err))
  }

  // DELETE
  deleteBounties = (_id) => {
    axios.delete(`/bounties/${_id}`)
    .then(response => {
      this.setState(prevState => ({
        bounties: prevState.bounties.filter(bounty => bounty._id !== _id)
      }))
    })
    .catch(err => console.log(err))
  }

  render() {

    return (
     <Provider value={{
       getBounties: this.getBounties,
       addBounties: this.addBounties,
       deleteBounties: this.deleteBounties,
       editBounties: this.editBounties,
      ...this.state
     }}>
      {this.props.children}
     </Provider>
    );

  }
};

export default BountyProvider;

export function withBounty (C) {
  return props => <Consumer>
                    {value => <C {...value}{...props }/>}
                  </Consumer>
}

// same as ^^^^
// export const withBounty = C => props => (
//   <Consumer>
//       {value => <C {...value}{...props}/>}
//   </Consumer>
// )