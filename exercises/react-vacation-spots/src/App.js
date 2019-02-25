import React from 'react';
import Spot from './Spot';
import './App.css';

let vacationSpots = [
    {
        place: "Meridian, Idaho",
        price: 40,
        timeToGo: "Spring"
    },{
        place: "Cancun",
        price: 900,
        timeToGo: "Winter"
    },{
        place: "China",
        price: 1200,
        timeToGo: "Fall"
    },{
        place: "Russia",
        price: 1100,
        timeToGo: "Summer"
    },{
        place: "Lebanon",
        price: 400,
        timeToGo: "Spring"
    }
]

const App = () => {
    const mappedVacation = vacationSpots.map((spot, timeToGo) => {
        console.log(timeToGo)
        let backgroundColor;
        if (spot.timeToGo === "Summer") {
            backgroundColor = "rgba(245, 230, 83, 1)"
        } else if (spot.timeToGo === "Spring") {
            backgroundColor = "rgba(0, 177, 106, 1)"
        } else if (spot.timeToGo === "Winter") {
            backgroundColor = "rgba(107, 185, 240, 1)" 
        } else if (spot.timeToGo === "Fall") {
            backgroundColor = "rgba(241, 90, 34, 1)"
        }

        let pricey;
        if (spot.price <= 500) {
            pricey="$"
        } else if (spot.price > 500 && spot.price <= 1000) {
            pricey="$$"
        } else if (spot.price > 1000) {
            pricey="$$$"
        }
        return (
            <Spot
                place={spot.place}
                price={spot.price}
                timeToGo={spot.timeToGo}
                backgroundColor={backgroundColor}
                pricey={pricey}
            />    
        )
    })

    return (
        <div id="container">
            {mappedVacation}
        </div>
    )
}

export default App;
