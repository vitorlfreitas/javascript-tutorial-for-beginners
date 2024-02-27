// Lesson12 - Arrays - forEach

// Executes a function on each element of the array individually.
let fruits = ['Apple', 'Banana', 'Orange', 'Strawberry'];

let startTimeForEach = performance.now();
fruits.forEach(function (fruit, index) {
    console.log('Index ' + index + ': ' + fruit);
});
let endTimeForEach = performance.now();
// The same output, but using the traditional for loop
let startTimeForLoop = performance.now();
for (let i = 0; i < fruits.length; i++) {
    console.log('Index ' + i + ': ' + fruits[i]);
}
let endTimeForLoop = performance.now();

/* For loop and For Each has some differences that is important to know

** Loop Control:
    for loop: It provides more control over the iteration process. You can break out of the loop using break, skip the current iteration using continue, and have more flexibility in controlling the loop flow.
    forEach(): It does not provide direct control flow statements like break or continue. Once started, it will iterate through all elements of the array unless an exception is thrown.

** Return Value:
    for loop: It does not implicitly return any value. You can manually collect data during the loop if needed.
    forEach(): It does not return anything. It's mainly used for its side effects, such as updating variables or performing actions on each element of the array.

** Readability and Conciseness:
    forEach(): It's often considered more readable and concise, especially for simple iteration tasks. It abstracts away the loop control logic, making the code more expressive.
    for loop: It may be more suitable for complex looping scenarios where fine-grained control is necessary. 

** Time Complexity:
    Most of the time, for loop can performance better than for each. However, for each is more readable and easier to maintenance. */

// Let's compare the time complexity
let timeComplexityForEach = endTimeForEach - startTimeForEach;
let timeComplexityForLoop = endTimeForLoop - startTimeForLoop;

console.log(`For each: ${timeComplexityForEach}ms`);
console.log(`For Loop: ${timeComplexityForLoop}ms`);
