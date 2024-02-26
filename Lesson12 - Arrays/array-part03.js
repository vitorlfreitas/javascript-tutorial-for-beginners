// Lesson12 - Arrays - Part 03

/*          *** Splice ***
    The splice() method is used to change the content of an array by removing, replacing, or adding elements. The syntax of splice() is as follows:

    array.splice(start, deleteCount, item1, item2, ...);

    - start: The index at which to start the modification.
    - deleteCount (optional): The number of elements to be removed starting from the start index. If you do not specify deleteCount, all elements from the start to the end of the array will be removed.
    - item1, item2, ... (optional): Elements to be added to the array starting from the start index. These elements will be added at the start position.
*/

// Removing an element
const arrayTest = [1, 2, 3, 4, 5];

arrayTest.splice(2, 1); // 2 means the start point, 1 means the number of elements to be removed

console.log(arrayTest); // [ 1, 2, 4, 5 ]

// Replace elements by removing one and adding another
const colors = ['red', 'green', 'blue', 'yellow'];

colors.splice(2, 1, 'purple');

console.log(colors); // ['red', 'green', 'purple', 'yellow']

// Adding elements without removing any
const arrayFruits = ['Apple', 'Banana', 'Orange'];

arrayFruits.splice(2, 0, 'Strawberry', 'Peach');

console.log(arrayFruits); // ['Apple', 'Banana', 'Strawberry', 'Peach', 'Orange']


/*          *** Slice ***
    The slice() method in JavaScript is used to create a copy of a portion of an existing array. It does not modify the original array but returns a new array containing the selected elements.
    It accepts two parameters, the start index and the end index of the array. Or without parameters, which copies the entire array. */


const listFruits = ['Apple', 'Banana', 'Orange', 'Strawberry', 'Peach'];

// Copy all the elements
const getAllElements = listFruits.slice();

// Copy a portion of the array
const middleOfArray = listFruits.slice(1, 4); // 'Banana', 'Orange', 'Strawberry'

// Copy the elements from the index 2 
const elementsFrom2toEnd = listFruits.slice(2); // 'Orange', 'Strawberry', 'Peach'

console.log(getAllElements); // [ 'Apple', 'Banana', 'Orange', 'Strawberry', 'Peach' ]
console.log(middleOfArray); // [ 'Banana', 'Orange', 'Strawberry' ]
console.log(elementsFrom2toEnd); // [ 'Orange', 'Strawberry', 'Peach' ]

