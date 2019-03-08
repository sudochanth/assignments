import React from 'react';
import {withGhibli} from './GhibliProvider'

class FilmCard extends React.Component {
    // constructor(props) {
    //     super(props)
    // }
    render() {
        console.log('fired')
        let { film } = this.props
        return (
            <div>
                <h1>{film.title}</h1>
            </div>
        );

    }
};

export default withGhibli(FilmCard);