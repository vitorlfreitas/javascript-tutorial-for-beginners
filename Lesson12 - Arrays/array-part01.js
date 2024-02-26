// Lesson12 - Arrays - Part 1

/* Arrays can be your best friends, but only if you know how to work with them. So to improve your skills, let's see some great methods.
* There is always the documentation to look up and find out more methods.
* Documentation => https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Arrays
*/

//          *** Adding elements ***
const myGrades = [8, 7, 4.5];

// Adds an element at the end
myGrades.push(1);
//  [8, 7, 4.5, 1]

// Adds an element at the beginning
myGrades.unshift(5);
//  [5, 8, 7, 4.5, 1]

//           *** Removing an Element ***

// Removes the last element
myGrades.pop();
//  [5, 8, 7, 4.5]

// Removes the first element
myGrades.shift();
//  [8, 7, 4.5]