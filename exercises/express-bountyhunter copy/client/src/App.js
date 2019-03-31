import React from 'react';
import CreateNewBounty from './CreateNewBounty'
import DisplayBounty from './DisplayBounty';

import { withBounty } from './BountyProvider';

class App extends React.Component {
  
  render(){
    return (
      <div>
        <CreateNewBounty />
        <DisplayBounty />

      </div>
    );

  }
};

export default withBounty(App);