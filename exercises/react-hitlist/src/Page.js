import React from 'react';
import Card from './Card';
import axios from 'axios';

class Page extends React.Component {
    constructor() {
        super()
        this.state = {
            people: []
        }
    }

    async componentDidMount() {
        const response = await axios.get('http://s3.amazonaws.com/v-school/data/hitlist.json');
        this.setState({
            people: response.data
        })
    }

    render() {
        console.log(this.state.people)
        const mappedPeople = this.state.people.map((person, i) => {
            return (
                <Card key={i+person.name}
                      name={person.name}
                      image={person.image}
                />      
            )
        })

        return (
            <div id="container">
                {mappedPeople}
            </div>
        )
    }
}


export default Page;