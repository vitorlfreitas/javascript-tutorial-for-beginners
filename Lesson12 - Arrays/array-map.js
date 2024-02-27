/* Lesson12 Arrays - Map

            Syntax: arr.map(function(elemento, índice, array){code}, this);

    -> callback: A function that will be called for each element in the array. It accepts three arguments:
    -> currentValue: The current element being processed in the array.
    -> index (optional): The index of the current element being processed in the array.
    -> array (optional)
    -> thisArg (optional): An optional parameter to specify the value of this when executing the callback function.

    Advantages:
        - Allows us to perform operations on each element individually.
        - The map method do not modify the original array
        - Efficiency
*/
const numbers = [1, 2, 3, 4, 5];

const doubledNumbers = numbers.map((value) => value * 2);
console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]

// If we want to use the index, just use the second parameter
const indexNumbers = numbers.map((value, i) => console.log(i + ": " + value));
console.log(indexNumbers); 
/* Output:
0: 1
1: 2
2: 3
3: 4
4: 5
*/

// Returning an array of objects
const nums = [1, 2, 3, 4];
// It is necessary to wrap the obj with parentheses 
const obj = nums.map(value => ({index: value}));

console.log(obj);
// [ { index: 1 }, { index: 2 }, { index: 3 }, { index: 4 } ]


