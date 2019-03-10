import React from 'react';
import Header from './Header';
import About from './About';
import Films from './Films';


import { Switch, Route } from 'react-router-dom';

const App = () => {
    return (
        <div>
            <Header />
            <Switch>
                <Route exact path='/' component={About} />
                <Route path='/Films' component={Films} />
            </Switch>
        </div>
    );
};

export default App;