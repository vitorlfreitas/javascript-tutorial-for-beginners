// Functions

// Read the function.md


// Function to print Hello, World!
function printHelloWorld() { // It do not return anything
    console.log("Hello, World!");
}

// function that receive a parameter and print a message
function drink(liquid) {
    console.log("Drinking " + liquid);
}

// function that returns a value
function squareRoot(num) {
    return Math.sqrt(num);
}

// As it returns a value, you do not want to lose it, so store it in a variable
let squareRootOf2 = squareRoot(2.0);
console.log(squareRootOf2);

// Calling before the function being assigned
let sum = sumNumbers(10, 20);
console.log(sum);

function sumNumbers(n, m) {
    return n + m;
}

// Calling after the function being assigned
let sum2 = sumNumbers(20, 30);
console.log(sum2); 

// You can print the function as well
console.log(sumNumbers); // [Function: sumNumbers]

// Remember to use and reuse your functions :)