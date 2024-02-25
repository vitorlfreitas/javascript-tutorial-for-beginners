// Lesson Object - Part 3

const person = {
    name: "John",
    age: 15,
}

// We can add new properties dynamically
person.gender = "Male";

// We can alter the values dynamically
person.name = "Vitor";

console.log(person);
// { name: 'John', age: 15, gender: 'Male' }

// We can delete properties
delete person.gender;

console.log(person);
// { name: 'John', age: 15 }