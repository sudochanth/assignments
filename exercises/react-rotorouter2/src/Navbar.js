import React from 'react';
// import Home from './Home';
// import About from './About';
// import Products from './Products';

import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/products">Products</Link>
        </div>
    );
};

export default Navbar;