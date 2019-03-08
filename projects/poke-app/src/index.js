import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import PokeProvider from './PokeProvider';
import { BrowserRouter } from 'react-router-dom';


ReactDOM.render(
    <BrowserRouter>
        <PokeProvider>
            <App />
        </PokeProvider>
    </BrowserRouter>,
document.getElementById('root'));