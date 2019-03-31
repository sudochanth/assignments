import React, { Component } from 'react';
import { withBounty } from './BountyProvider';
import BountyItem from './BountyItem';
// import axios from 'axios';

class DisplayBounty extends Component {

  componentDidMount(){
    this.props.getBounties();
  }
  
  render() {
    const mappedBounties = this.props.bounties.map((bounty, i) => {
      return (
        <BountyItem key={i} bounty={bounty} />
        )
      })
      return (
        <div>
        {mappedBounties}
      </div>
    )
  }
}

export default withBounty(DisplayBounty);










// handleSubmit = (e, id) => {
//   e.preventDefault();
//   // let { fName, lName, isAlive, amount, type, } = this.state;
//   // const newObj = {
//   //   fName: fName,
//   //   lName: lName,
//   //   isAlive: isAlive,
//   //   amount: amount,
//   //   type: type,
//   // }
//   // this.setState(prevState => {
//   // })
//   axios.post('/bounties', this.state)
//     .then(response => {
//       // console.log(this.state)
//       console.log(response.data)
//       this.setState(prevState => ({
//         bounties: [response.data, ...prevState.bounties],
//         fName: '',
//         lName: '',
//         isAlive: '',
//         amount: '',
//         type: ''
//       }))
//     })

// }