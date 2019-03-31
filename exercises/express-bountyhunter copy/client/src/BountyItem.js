import React from 'react';

const BountyItem = (props) => {
  let { firstName } = props.bounty
  return (
    <div>
      <h1>{firstName}</h1>
    </div>
  );
};

export default BountyItem;