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
let anyAge = 10505050;
console.log("Hi, I am " + name + ", I am " + anyAge); 

// The awesome feature of the ECMA6 => Template String
console.log(`Hi, I am ${name}, I am ${anyAge}`);
// Same result, less complexity

/* OUTPUT
    Info: Start process (10:21:05 AM)
    Printing Strings
    Any Name
    1011
    1030
    Using simple marks
    Using double marks
    Hi, I am Xname, I am 10505050 
    Hi, I am Xname, I am 10505050   
    Info: End process (10:21:05 AM)
*/