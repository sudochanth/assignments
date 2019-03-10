import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import GhibliProvider from './GhibliProvider';

ReactDOM.render(
    <GhibliProvider>
    <BrowserRouter>
        <App />
    </BrowserRouter>
    </GhibliProvider>,
    document.getElementById('root'));