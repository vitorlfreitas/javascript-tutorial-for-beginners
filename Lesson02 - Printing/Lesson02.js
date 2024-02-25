"use strict"

// Lesson02 - Printing

// Printing a String in the console
console.log("Printing Strings");

let myName = "Any Name";

// Printing a Variable
console.log(myName);

// We can print operations as well
let num = 1010;
console.log(num + 1);
console.log(num + 20); 

// When you want to  print a message you can use either simple or double quotations marks
console.log('Using simple marks');
console.log("Using double marks");

// Concatenating strings and variables
let name = 'Xname';
let anyAge = 23;
console.log("Hi, I am " + name + ", I am " + anyAge); 

// The awesome feature of the ECMA6 => Template Literal
console.log(`Hi, I am ${name}, I am ${anyAge}`);
// Same result, less complexity

// We can do more!

// Using '' or break lines before the Template Literal
let introduction = "Hello,\n\nMy name is \"Vitor\", I am " + anyAge + " years old\n\nBucket list:\n=> Macbook pro\n=> Go to X";
console.log(introduction); // Very ugly

console.log();
// Same result, or even better
let introduction2 = 
`Hello,

My name is 'Vitor', I am ${anyAge} years old

Bucket list:
=> Macbook
=> Go to X`;

console.log(introduction2);