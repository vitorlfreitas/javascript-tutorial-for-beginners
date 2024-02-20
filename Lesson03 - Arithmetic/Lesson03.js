//      *** Arithmetic Operations ***

// Variables
let num1 = 10;
let num2 = 15;

//  *** Basic Math Operations ***

// Sum
let sum = num1 + num2;
console.log(sum);

// Subtraction
let sub = num1 - num2;
console.log(sub);

// Multiplication
let multi = num1 * num2;
console.log(multi);

// Division
let div = num1 / num2;
console.log(div);

// Remainder
let rem = num2 % num1;
console.log(rem);

//Exponentiation
let expo1 = num1 ** 2; // Square
let expo2 = num1 ** 3; // Cube

let expo3 = Math.pow(num1, 2); // Raised by 2

//      *** Arithmetic Operations ***
// => Bear in mind that they return either true or false

let greater = num1 > num2; // Greater than 
let less = num1 < num2; // Less than
let greaterOrEqual = num1 >= num2; // Greater than or equal to
let lessOrEqual = num1 <= num2; // Less than or equal to


/* Pay Attention
    Sometimes, JavaScript tries to help us, but be careful. Because it is dumb. 
*/ 
let stringNum1 = '10';

let equal = num1 == stringNum1; 
console.log(equal); // true
// When we use double equal (==), it ignores the type of the value. It says true because the JavaScript will try to convert the string into the number and then it compares the number and return the result. 

let superUsefulEqual = num1 === stringNum1;
console.log(superUsefulEqual); // false
// This triple equal checks if the type is the same and then compare the variables. So, always use === sign

let different = num1 !== num2;
console.log(different); // true  

// Let's take a break
