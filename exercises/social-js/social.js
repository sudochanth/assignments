var petOwner = {
    name: "Sunny",
    age: 26,
    numOfPets: 2 [
        {
            petName: "Koda",
            petBreed: "Pomeranian"
            petAge: 2,
            favToys: ["blue bone", "Brock Lee"]
            children: 0
        },
        {
            petName: "Rocky",
            petBreed: "Yorkie"
            petAge: 11,
            favToys: ["big bone", "Koda's blue bone"]
            children: 2 [
                {
                    childName: "Chewy",
                    childAge: 4
                },
                {
                    childName: "Foxy",
                    childAge: 4
                }
            ]
        }
    ],
    birthday: function() {
        petOwner.age++
        console.log(petOwner.age)
    }
}

petOwner.birthday()
