import React from 'react';
import { withToggler } from './Toggle';

const Card = ( {on, toggle, name, image} ) => {
    // const { name, image } = this.props
    // console.log(props)
    // const styles = {
    //     backgroundImage: `url(${image})`,
    //     height: "100px",
    //     width: "100px"

    // }
    return (
        <div id="card" >
            <h1 className={on ? 'notKilled' : 'killed'}>{name}</h1>
            
            {/* <div style={styles} id="pic" className={on ? 'show' : 'hide'} ></div> */}
            <img src={image} alt={name} ></img>
            {/* <div className={!on ? 'show' : 'hide'}></div> */}
            {/* <div className={on ? 'hide' : 'show'}>dead</div> */}
            <br></br>
            <button onClick={toggle}>Killed</button>
        </div>
    )
}

export default withToggler(Card);