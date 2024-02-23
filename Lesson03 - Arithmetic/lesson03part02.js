// Assignment Operators

// Analyze the code

let x = 1;

x = x + 1;
x = x - 2;
x = x * 3;
x = x / 1;

// Don't you think they are too repetitive?
// I think so! for solving that, the Assignments Operators was born

// Analyze this clean code

x += 1; // x = x + 1
x -= 2; // x = x - 2
x *= 3; // x = x * 3
x /= 1; // x = x / 1


// More clean, isn't?

// You can do it if all the simple operators

// There is also the increment and decrement operators, that turns our code way simpler.

let a = 0;
a++; // It is equal to a = a + 1; 
a--; // It is equal to a = a - 1;

/* You have to be aware of the diference between:
a++; 
++a;
a--;
--a;

They all will add or subtract 1 from the variable
The difference is when you see this code:

    let a = 1;
    let b = 2 + a++;

What is the value of b?

Let's check
*/

let n = 1;
let m = 2 + n++;
console.log(m); // The value is 3, but why?

/*
It happens because the n++ increments 1 after the operation. In other words, i this code is equivalent of:

let n = 1;
let m = 2 + n;
n = n + 1;

So, what is the output for: 

    let num1 = 10;
    let num2 = 10 + ++num1;

Let's check!
*/

let num1 = 10;
let num2 = 10 + ++num1;
console.log(num2); // The value is 21, but why?

/*
That is because now, this code is increment 1 before this code, so this code is equivalent of:

let num1 = 10;
num1 = num1 + 1;
let num2 = 10 + num1;

That's why the answer is 21, it adds a new line of code before the assignment

The decrement (--) works in the same way

let num1 = 10;
let num2 = 10 - --num1;
is equal to:
let num1 = 10;
num1 = num1 1 1;
let num2 = 10 + num1;

*/

let number1 = 10;
// decrements the variable first
let number2 = 10 - --number1;
// 10 - 9 == 1

console.log(number2); // 1 