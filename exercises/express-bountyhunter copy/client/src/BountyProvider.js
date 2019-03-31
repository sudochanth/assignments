import React from 'react';
import axios from 'axios';
const { Provider, Consumer } = React.createContext();

class BountyProvider extends React.Component {
  constructor() {
    super()
    this.state = {
      // fName: '',
      // lName: '',
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

  // DELETE
  // deleteBounties = () => {
  //   axios.delete(`/bounties/${_id}`)
  //   .then(response => {
  //     this.setState(prevState => ({
  //       bounties: prevState.bounties
  //     }))
  //   })
  // }

  render() {

    return (
     <Provider value={{
       getBounties: this.getBounties,
       addBounties: this.addBounties,
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