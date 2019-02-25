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
                imgUrl="https://images.pexels.com/photos/1643113/pexels-photo-1643113.jpeg?cs=srgb&dl=adventure-clouds-crater-1643113.jpg&fm=jpg"
                title="this is a title"
                subtitle="this is a subtitle"
                info="this is info"
                color="red"
            />
            <Image
                title="this is a title"
                subtitle="this is a subtitle"
                info="this is info"
                color="orange"
            />
            <Image
                title="this is a title"
                subtitle="this is a subtitle"
                info="this is info"
                color="yellow"
            />
            <Image
                title="this is a title"
                subtitle="this is a subtitle"
                info="this is info"
                color="green"
            />
            <Image
                title="this is a title"
                subtitle="this is a subtitle"
                info="this is info"
                color="blue"
            />
            <Image
                title="this is a title"
                subtitle="this is a subtitle"
                info="this is info"
                color="indigo"
            />
            <Image
                title="this is a title"
                subtitle="this is a subtitle"
                info="this is info"
                color="violet"
            />
            <Image
                title="this is a title"
                subtitle="this is a subtitle"
                info="this is info"
                color="pink"
            />
        
            <Footer />
        </div>
    )
}

export default App;