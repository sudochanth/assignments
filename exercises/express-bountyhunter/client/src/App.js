import React from 'react';

import { withBounty } from './BountyProvider';
const App = () => {
    return (
      <div>
        hello
      </div>
    );


};

export default withBounty(App);