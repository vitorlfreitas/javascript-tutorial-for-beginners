//  Conditionals

/*      If Statements
    If statements is a conditional which checks the boolean argument and if it is true, it will execute the code within its scope, otherwise, it will skip the code
*/
let num1 = 15;
let num2 = 20;

if (num1 < num2) { // If it is true
    console.log(`Number ${num1} is shorter than ${num2}`);
} else if (num1 > num2) // If it's false
    console.log(`Number ${num1} is larger than ${num2}`);
else // If any of the previous conditionals were true, this code will be executed
    console.log(`Number ${num1} is equal to ${num2}`);

/*
    How do we understand that?

    if (true)
        then do this
    else if  (true)
        then do this instead
    else 
        do this instead

*/

/*  Notes: Structure of If... Else

    if (condition) {
        code
    }
    else {
        code
    }

    However, we can shrink this code, if the instruction is one line

    if (condition) code
    else if (condition) code
    else code

    there is no need of brackets with the code is only one instruction, 
    Look at the next example:

*/

let n = 15;
let m = 10;

if (n < m) console.log("The number N is less than the number M");
if (n > m) console.log("The number N is greater than the number M");
else console.log("They are equal");

// Compare them, they have the same function, but for this one, we only needed 3 lines of code