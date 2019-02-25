import React from 'react';
import './App.css';

const Header = () => {
    const headerStyles = {
        listStyle: "none"
    }
    return (
        <header id="header">
            <ul style={headerStyles}>
                <li>Start Bootstrap</li>
                <li>Home</li>
                <li>About</li>
                <li>Sample Post</li>
                <li>Contact</li>
            </ul>
            <div id="headerImage"></div>
        </header>
    )
}

export default Header;