// Objects - Methods

// Ways to Clone an Object
const person = {
    name: 'Mark',
    age: 32,
    sleep() {
        console.log("Sleeping...");
    }
}

// Way 1 "The Hard Way":
// Initialize an Empty Object
const secondPerson = {};

// We add dynamically a new property and its value. (We have to know the name of the properties)
secondPerson['name'] = person.name;
secondPerson['age'] = person.age;
// ...

// Way 2 'For in': 
const thirdPerson = {};
for (let key in person)
    secondPerson[key] = person[key];

// Way 3 'Using the Object class to create a new object and copy all the properties and values of others objects
const superHero = {
    skills: ['Fly', 'Super Strength'],
}

const superMan = Object.assign({}, person, superHero);

console.log(superMan);

// Way 4 'Spread Operator'
const fifthPerson = {...person};  
