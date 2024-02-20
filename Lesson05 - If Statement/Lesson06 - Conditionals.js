
/* Logical Operators

&& Known as "AND". It is the operator where both conditionals must be true
|| Known as "OR". It is the operator where AT LEAST ONE conditional is true
! Known as "Not". It is used to negate a conditional, where we are waiting for a false. Do not worry about that, you will understand

*/

let num1 = 10;
let num2 = 15;
let num3 = 20;

// If number2 is larger than the number1 **AND** number2 is larger than the number3
if (num2 > num1 && num2 < num3) 
    console.log("Number 2 is between both number");

// If number1 is shorter than the number2 **OR** number3 is shorter than the number2
if (num1 < num2 || num3 < num2) 
    console.log("Number 2 is either larger than the Number 1 or The Number 2 is larger than the Number 3");

// If the remainder of the Number divided by 2 is **NOT** equal to 0, then  
if (!num2 % 2 === 0)
    console.log("Number 2 is odd");

// Ternary Operator

// conditional ? true : false
// Basically means that if the conditional is true, the code after the ? will be executed, otherwise, the code after :

let string = num1 < num2 ? "Number2 is Larger" : "Number1 is Larger";
console.log(string); // Number2 is Larger

// Way simpler than simple If statements.


