// Lesson Object - Part 3

// Objects are

const person = {
    name: "John",
    age: 15,
}

// We can add new properties
person.gender = "Male";

console.log(person);
// { name: 'John', age: 15, gender: 'Male' }

// We can add anything, and also delete properties
delete person.gender;

console.log(person);
// { name: 'John', age: 15 }