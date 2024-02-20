"use strict"

/*
    Hi everyone,
    This lesson will continuing explain the Math library that the JavaScript offers to help us. 
*/

// Assign our variables 
let num1 = 10;
let num2 = 2;

// Absolute Value
let abs = Math.abs(2 * -1); // 2

// Round
let money = 10.60;
let round = Math.round(money);
console.log(money); // 10.6

// Round down
let roundDown = Math.floor(money);
console.log(roundDown); // 10

// Round up
let roundUp = Math.ceil(money);
console.log(roundUp); // 11

// Remove the decimal
let truncate = Math.trunc(money);
console.log(truncate); // 10

// Random Number
let random = Math.random(); // Generates a random number between 0 and 1
console.log(random); 

// Logarithm
let log = Math.log2(8);
console.log(log); // 3

let log1 = Math.log(4);
console.log(log1);

// Max and Min
let largerNum = Math.max(num1, num2);
console.log(largerNum);

let shorterNum = Math.max(num1, num2);
console.log(shorterNum);
