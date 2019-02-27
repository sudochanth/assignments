import React, { Component } from 'react';

class HeroList extends Component {
    

    handleAlert = () => {
        alert(this.props.catchPhrase)
    }
    
    render(props) {
        return (
            <div>
                <h1 onClick={this.handleAlert}>{this.props.name}</h1>
                <img onClick={this.handleAlert} src={this.props.imgUrl} alt=""/>
            </div>
        )
    }
}

export default HeroList;