import React, { Component } from 'react';
import Navbar from './Components/Layout/Navbar';
import Index from './Components/Layout/Index';
import Lyrics from './Components/tracks/Lyrics'
import {Provider} from './Context';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

class App extends Component {
    render() {
        return (
            <Provider>
                <Router>
                    <>
                        <Navbar />
                        <div className="container">
                            <Switch>
                                <Route exact path='/' component={Index} />
                                <Route exact path='/Lyrics/track/:id' component={Lyrics} />
                            </Switch>
                        </div>
                    </>
                </Router>
            </Provider>
        )

    }
}

export default App;