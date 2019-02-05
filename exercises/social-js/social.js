var petOwners = {
    people: [
        {
            name: "Sunny",
            age: 26,
            numOfPets: 2 [
                {
                    petName: "Koda",
                    petAge: 2,
                    petType: "Dog",
                    petBreed: "Pomeranian",
                    children: 0
                },
                {
                    petName: "Rocky",
                    petAge: 11,
                    petType: "Dog",
                    petBreed: "Yorkie",
                    children: 2 [
                        {
                            childName: "Chewie",
                            childAge: 4
                        },
                        {
                            childName: "Foxy",
                            childAge: 4
                        }
                    ]
                }
            ]
        },
        {
            name: "Penny",
            age: 32,
            numOfPets: 1 [
                {
                    petName: "Pepper Steak",
                    petAge: 5,
                    petType: "Rabbit",
                    petBreed: "lop",
                    children: 0
                }
            ]
        }
    ],
    birthday: function(i) {
        this.people[i].age++
        console.log(this.people[i].age)
    }
}

petOwners.birthday(1)