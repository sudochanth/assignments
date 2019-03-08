import React from 'react';
import { Route } from 'react-router-dom';
import Pokelist from './Pokelist';
import { Link, withRouter } from 'react-router-dom';
import './App.css'

const Pokeball = () => {

    return (      
        <>  
            <div id="pokeContainer">
                <Link id='pokeball1' to='/Pokelist'><img id='pokeball' src='https://webstockreview.net/images/pokeball-clipart-transparent-background-3.png' alt='pokeball'>
                </img></Link>

            </div>
        </>
    );
};

export default Pokeball;