// Reference vs Primitive

/*
    Primitive types are:
        -> Number
        -> String
        -> Boolean
        -> Undefined
        -> Null

    Reference Type
        -> Array
        -> Object
        -> Function

    The difference is how they store the variable in the memory.
    The primitive type stores each variable in a unique memory space, so for example:
*/

let a = 10; // Assign a variable
let b = a; // Assign another variable  

a = 20; // It will not change the variable 'b', since they are independent

console.log(a); // 20
console.log(b); // 10

/*
    However, if it is a reference value, it changes the output since a reference value does not set a new variable, they use the same memory space. In other words, it is just two or more variable referencing the same value
*/
// Example 1 with Objects
const person = { name: 'Andrew'};
let name = person;
person.name = 'Josh'

console.log(name); // Josh

// Example 2 - Arrays
const evenNumber = [0, 2, 4, 6, 8];
let even = evenNumber;

evenNumber.push(10);

console.log(even);
// [ 0, 2, 4, 6, 8, 10 ] It added the value 10
