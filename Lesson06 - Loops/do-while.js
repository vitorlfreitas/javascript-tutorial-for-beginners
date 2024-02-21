/*      *** Lesson06 Part02 - Loop DO While ***

    Do While is a loop which verifies the condition in the end of the code. In other words, it will execute the code at least one time and then it checks the condition, if true, go back to the beginning and executes the code again, until the condition turns false.
    Useful when we want to execute the code at least one time.

    Structure: 
    do {

        executes the scope

    } while (condition);

*/
let bool = false;
let loops = 0; // It shows how many times our do while iterates
do {
    console.log("Hello, World!");
    loops++;

} while (bool); // As our boolean is false, it will not execute the code

console.log(loops); // 1

// Output:
//  Hello, World!

let bool2 = true;
let loops2 = 0; // It will show how many times our code iterated.

do {
    if (loops2 === 3) {
        break;
    }
    console.log('Hello, World!');
    loops2++;

} while (bool2);

// Output:
//  Hello, World!
//  Hello, World!
//  Hello, World!

console.log(loops2); // 3 