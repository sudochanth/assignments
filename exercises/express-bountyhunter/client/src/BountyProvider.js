import React from 'react';
import axios from 'axios';
const { Provider, Consumer } = React.createContext();

class BountyProvider extends React.Component {
  constructor() {
    super()
    this.state = {
      fName: '',
      lName: '',
      isAlive: '',
      amount: '',
      type: '',
      _id: '',
      bounties: []
    }   
  }

  // GET
  getBounties = () => {
    axios.get(`/bounties`).then(response => {
      // console.log(response.data);
      this.setState({
        bounties: response.data
      })
    })
  }

  // POST
  
  componentDidMount() {
    console.log('hello v')
    this.getBounties();
  }

  render() {

    return (
     <Provider value={{
       getBounties: this.getBounties,
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