/*          *** Spread Operator ***

    There are many ways to use the Spread Operator
    The Spread Operator "..." was introduced in ES6 and it allows an iterable, such as an array or string, to be expanded or spread into elements.

    * You can use the Spread Operator to Copy Arrays: 
    
    const arr = [1, 2, 3];
    const copyArr = [...arr];
    
    * You can use to concatenate arrays easily:

    const arr1 = [1, 2, 3];
    const arr2 = [4, 5, 6];
    const concatenatedArray = [...arr1, ...arr2];

    * Passing Arguments to Function:

    function add(a, b, c) {
        return a + b + c;
    }

    const numbers = [1, 2, 3];
    console.log(add(...numbers)); // Output: 6

    * Creating copies of Objects:

    const obj = { animal: 'cat' };
    const copy = { ...obj };
    console.log(copy); // Output: { animal: 'cat' }


    * Combine Objects:

    const obj1 = { animal: 'cat' };
    const obj2 = { animal: 'dog' };
    const copy = { ...obj1, ...obj2 };
    console.log(copy); 
    // Output: { animal: 'cat', animal: 'cat' }

    We can combine an array of primitive types with an array of objects, but there are some

    * See the example below *

    You can copy the codes above and paste below to see them running

    */

// Example 1
const arr = [1, 2, 3, 4]
const obj = { animal: 'dog' };
const copy = {...arr, ...obj};
console.log(copy); 
/* Output: { '0': 1, '1': 2, '2': 3, '3': 4, animal: 'dog' } */

// Example 2
const nums = [1, 2, 3];
const anotherNums = [5, 6, 7];
const combined = [...nums, 4, ...anotherNums, 'A']
console.log(combined);
/* Output:
[
    1, 2, 3, 4,
    5, 6, 7, 'A'
]
*/