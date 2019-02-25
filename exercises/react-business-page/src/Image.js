import React from 'react';

function Image(props) {
    const styles = {
        backgroundColor: props.color,
        height: '300px',
        width: '300px'
    }

    return (
        <div style={styles}>
            <img src={props.imgUrl}/>
            <h1>{props.title}</h1>
            <h3>{props.subtitle}</h3>
            <p>{props.info}</p>
            <p>{props.color}</p>
        </div>
    )
}

export default Image;