import React from 'react';
import Pokeball from './Pokeball';
import Pokelist from './Pokelist';
import Nav from './Nav';
import { Switch, Route } from 'react-router-dom';


const App = () => {
    return (
        <div>
        <Nav />
        <Switch>
            <Route exact path='/' component={Pokeball} />
            <Route path='/Pokelist' component={Pokelist} />
        </Switch>

        </div>
    );
};

export default App;