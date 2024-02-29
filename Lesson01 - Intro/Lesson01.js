"use strict" // Ignore this statement for now

//      *** Lesson 1 - Primitive Types ***

// Read the README file 

// Variables we usually name in camelCase

// String
let word = "Word"; 
let word2 = 'A phrase';

// JavaScript do not care with you use simple quotation or double quotation marks to assign a String

// Numbers
let num = 1; // Integer
let num2 = 1.5; // Double


let bool = false; // Boolean

// Constants we usually name in SNAKE_CASE

const CPF = "13245678911"; // String
const PI = 3.1415; // Number
const I_AM_HUMAN = true; // Boolean

/*  *** What is the difference? ***
    Variables we can assign a new value, but we cannot change constants
*/

word = "New word";

// CPF = "123456"; // If you run this script, you get an error message "TypeError: Assignment to constant variable."

/*
    * We can also assign a variable with the "var" keyword, but it is not recommended to use.  
    * Variables declared with 'var' keyword are a function-scoped. It means that they can be accessed out of the scope that they have been assigned.
    * It happens because the var variables are hoisted when the programming is running. If you assign a var variable in a if statement or for, in the global scope, when you run this code, the variable will go to the top of the scope, so it has access anywhere within the scope
    * Hoisting is the action to hoist to the top of the scope when the program is initialized.
    * They are separated in function or global scope. If you assign a var within a function, it will be acessible anywhere within the function, and if it is in a global scope, it will be accessible anywhere. 
    * var also allows us to re-declare the same variable, which means that is easier to lose data.

*/

person1 = "John";

var person1;

console.log(person1);

// If you run this code above, any error will be thrown.

person2 = 'Anna';

let person2;

console.log(person2);

// If you try this code, you will get this message:
// ReferenceError: Cannot access 'person2' before initialization

if (true) {
    var acessibleVariable = 'abc';
}
// We can access the variable inside the if scope
console.log(acessibleVariable);

// Re-declaring the acessibleVariable
var acessibleVariable = false;

console.log(acessibleVariable);

// You cannot do the same with the let variable. Therefore, use always let to assign variables!


// Others type in JavaScript, we will cover in details in the next lessons

let undefinedNull = undefined;
let nullValue = null;
let notNumber = NaN;
