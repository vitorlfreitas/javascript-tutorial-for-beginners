// Lesson12 - Arrays - forEach

// Executes a function on each element of the array individually.
let fruits = ['Apple', 'Banana', 'Orange', 'Strawberry'];

fruits.forEach(function (fruit, index) {
    console.log('Index ' + index + ': ' + fruit);
});

// The same output, but using the traditional for loop

for (let i = 0; i < fruit.length; i++) {
    console.log('Index ' + i + ': ' + fruits[i]);
}

// Comparing the for-loop with .forEach(), we can say that the for loop has more advantages to use than forEach()?

