import React from 'react';
import Nav from './Nav';
import Home from './Home';
import About from './About';
import { Switch, Route } from 'react-router-dom';
import FilmList from './FilmList';
import './App.css';

const App = () => {
    return (
        <div>
            <Nav />
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/About' component={About} />
                <Route path='/FilmList' component={FilmList} />
            </Switch>
        </div>
    );
};

export default App;