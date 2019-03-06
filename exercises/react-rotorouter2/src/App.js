import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import './App.css';

import Home from './Home';
import About from './About';
import ProductLists from './ProductLists';
import Product from './Product'

import { Switch, Route } from 'react-router-dom';


const App = () => {
    return (
        <div>
            <Navbar />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path='/products' component={ProductLists} />
                {/* <Route exact path='/products/._id' component={Product} /> */}

            </Switch>
            <Footer />
        </div>
    )
}

export default App;