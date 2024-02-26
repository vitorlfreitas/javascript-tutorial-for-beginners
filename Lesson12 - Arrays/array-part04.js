/* Lesson12 - Arrays Methods - Search */

// Let's see some important methods to find an element or filter

// * For Primitive Types:

/*          *** indexOf ***
It will return the index of the first element found or return -1 if not found */

const fruits = ['Banana', 'Apple', 'Orange', 'Apple','Grape', 'Apple'];

let firstIndexOfApple = fruits.indexOf('Apple');
console.log(firstIndexOfApple); // 1

/*          *** lastIndexOf ***
It will return the last index of the first element found or return -1 if not found */

let lastIndexOfApple = fruits.lastIndexOf('Apple');
console.log(lastIndexOfApple); // 5

// Both indexOf and lastIndexOf accepts 2 parameters, the first is the element to be found and the second is the index to start to look. 
let secondIndexOfApple = fruits.indexOf('Apple', 2); // It means that it will start to search from the index 2 on.
console.log(secondIndexOfApple); // 3

/*          *** Includes ***
Returns true or false if the array contains the value passed as a parameter.
It only works for primitive types */

// Instead of
console.log(fruits.lastIndexOf('Apple') !== -1); // true
// Use
console.log(fruits.includes('Apple')); // true

// * For Reference types:

//          *** Find ***

// Returns the value of the first element in the array that returned true for the predicated function, and undefined if any of the elements returned true.

const people = [
    { name: 'Alice', age: 25 },
    { nome: 'Bob', age: 31 },
    { nome: 'Carol', age: 22 },
    { nome: 'David', age: 35 }
];

const personFound = people.find(function (person) {
    return people.age > 30;
});

// Works similarly to the find, but the difference is that findIndex() returns the index os the value found and -1 if not found

const indexPerson = people.findIndex((person) => person.age > 30);

console.log(indexPerson); // 1

//          *** Filter ***

// Returns the elements of an array that returns true for the condition specified in the predicate.  
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evenNumbers = nums.filter(function (num) {
    return num % 2 === 0;
});

console.log(evenNumbers); // [2, 4, 6, 8, 10]

// We can use with reference types
const myPets = [
    {animal: 'Cat', name: 'Black Panther'},
    {animal: 'Dog', name: 'Rex'},
    {animal: 'Cat', name: 'Pink Panther'}
];
const myCats = myPets.filter((pet) => pet.animal === 'Cat');

console.table(myCats);
// console.table is very useful to visualize the array of objects




