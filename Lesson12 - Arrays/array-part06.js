// Lesson12 - Arrays - Reduce()

/* The reduce() method in JavaScript is used to reduce (or accumulate) the values of an array into a single value.

accumulator: The resulting accumulated value after each iteration.
element: The current element being processed in the array.
index: The index of the current element.
array: The original array being reduced.
initialValue: The initial value of the accumulator. It's optional and if not provided, the first element of the array will be used as the initial value.
*/

const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce(function (acc, currentElement) {
    return acc + currentElement;
}, 0); // Initial Value

/* It's important to note that you can use the reduce() method to perform a variety of reduction operations, such as finding the maximum value, minimum value, calculating the average, concatenating strings, etc. It all depends on the reduction function you provide as an argument to the reduce() method. Make sure the reduction function is consistent with the type of operation you want to perform.
*/

console.log(sum); // Result: 15

// Using the Reduce method to find the maximum value
const numbers2 = [5, 12, 8, 21, 3, 15, 9];

const greatestNumber = numbers2.reduce(function (acc, element) {
    if (element > acc) 
        return element;
    return acc;
}, numbers2[0]); // Initializing using the first element 

console.log("The greatest number is ", greatestNumber);

// Find the Average
const numbers3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const avgNumber = numbers3.reduce(function (acc, element) {
    return acc + element;

}, 0) / numbers3.length;

console.log(avgNumber); // Result: 5.5


