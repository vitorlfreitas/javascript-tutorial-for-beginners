// Lesson12 Arrays - Part 2

// We will continue to cover some methods

const myGrades = [8, 7, 4.5];

/*          *** Sorting ***
    Organizes the array in order alphanumeric */
myGrades.sort();
// [ 4.5, 7, 8 ]

/*          *** Reverse ***
    Reverse the order of the elements */
myGrades.reverse();
// [ 8, 7, 4.5 ]

/*          *** Concat ***
    Join two or more arrays into a new array */

const numbers = [0, 20, 15, 20];
const moreNumbers = [0, 1, 2, 3];
const concatArrays = moreNumbers.concat(numbers);

console.log(concatArrays);
/* Output:
[
    0,  1,  2,  3,
    0, 20, 15, 20
]
*/