import React from 'react';

const Spot = (props) => {
    const style = {
        backgroundColor: props.backgroundColor
    }
    return (
        <div style={style} className="card">
            <h2>Let's go to {props.place}</h2>
            <h3>${props.price}</h3>
            <p>Best time to go is {props.timeToGo}</p>
            <p>{props.pricey}</p>
        </div>
    )
}

export default Spot;
