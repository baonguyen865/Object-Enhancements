const createInstructor = (firstName, lastName) => {
    return {
        firstName,
        lastName,
    }
}

let favoriteNumber = 7;
const instructor = {
    firstName: "Colt",
    [favoriteNumber]: "That's my favorite"
}

const instructor2 = {
    firstName: 'Colt',
    sayHi() {
        return 'Hi'
    },
    sayBye() {
        return this.firstName + ' says bye';
    }
}

const createAnimal = (species, verb, noise) => {
    return {
        species,
        [verb]() {
            return noise
        }
    }
}