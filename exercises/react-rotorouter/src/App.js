import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Switch, Route } from 'react-router-dom';

import Home from './Home'
import About from './About'
import Contact from './Contact'

const App = () => {
    return (
        <div>
            <Header />
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/about" component={About}/>
                <Route path="/contact" component={Contact}/>
            </Switch>
            <Footer />
        </div>
    )
}

export default App;