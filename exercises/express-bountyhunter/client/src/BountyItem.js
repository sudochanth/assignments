import React from 'react';
import { withBounty } from './BountyProvider';

const BountyItem = (props) => {
  console.log(props.bounty)
  let { firstName, lastName, amount, type, deleteBounties, _id } = props.bounty
  return (
    <div style={{border: "solid 3px red"}}>
      <h1>{firstName} {lastName}</h1>
      <h1>{amount}</h1>
      <h1>{type}</h1>
      <button onClick={() => props.deleteBounties(_id)}>delete</button>
      <button onClick={() => props.editBounties(_id)}>edit</button>
    </div>

  );
};

export default withBounty(BountyItem);