import React from 'react';
import HeroList from './HeroList';


const heroes = [
    {
        name: "spiderman",
        catchPhrase: "does whatever a spider can",
        imgUrl: "https://pbs.twimg.com/profile_images/1097759648147357696/klBhSkJo_400x400.png"
    },
    {
        name: "spiderman",
        catchPhrase: "does whatever a spider can",
        imgUrl: "https://pbs.twimg.com/profile_images/1097759648147357696/klBhSkJo_400x400.png"
    },
    {
        name: "spiderman",
        catchPhrase: "does whatever a spider can",
        imgUrl: "https://pbs.twimg.com/profile_images/1097759648147357696/klBhSkJo_400x400.png"
    },
    {
        name: "spiderman",
        catchPhrase: "does whatever a spider can",
        imgUrl: "https://pbs.twimg.com/profile_images/1097759648147357696/klBhSkJo_400x400.png"
    }        
]

const Superhero = () => {

    const mappedHeroes = heroes.map((hero, i) => {
        return (
            <HeroList
                key={i+hero.name}
                name={hero.name}
                catchPhrase={hero.catchPhrase}
                imgUrl={hero.imgUrl}
            />
        )
    })

    return (
        <div>
            {mappedHeroes}
        </div>
    )
}

export default Superhero;