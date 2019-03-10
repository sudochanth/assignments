import React from 'react';
import { Link } from 'react-router-dom';
import './App.css'

const Header = () => {
    return (
        <header>
            <Link to="/about">About</Link>
            <Link to="/films">Films</Link>
        </header>
    );
};

export default Header;