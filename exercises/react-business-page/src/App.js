import React from 'react';
import Navbar from './Navbar';
import Info from './Info';
import List from './List';
import Image from './Image';
import Footer from './Footer';

import './App.css'

const App = () => {
    return (
        <div>
            <Navbar />
            <Info />
            <List />
            <Image 
                image={{
                    imgUrl: "",
                    title: "this is a title",
                    subtitle: "this is a subtitle",
                    info: "info info"
                }}
            />
            <Footer />
        </div>
    )
}

export default App;