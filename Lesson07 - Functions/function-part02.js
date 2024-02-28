
// Now that you know how to declare a function, I would like to show you more ways to declare functions in JavaScript. 

// Let's Review:

// Function Declaration
function sayHello() {
    console.log('Hello!');
}
// Calling the function
sayHello()

// Named Function Expression
let bye = function sayBye() {
    console.log('Bye');
};
// Calling the function by the name of the variable
bye();

// Anonymous Function Expression
let anonymous = function() {
    console.log('Can you see me?');
}
// Calling the function
anonymous();

// Functions are References types, it means that we can reference the same function in multiples variables or objects
let myObj = {
    name: 'Any',
    anonymous: anonymous
}
// Calling the function from my Object
myObj.anonymous();

/* The biggest differences between both:

    ** Hoisting:

    * Function declarations are hoisted, which means they are recognized and can be called before they are declared in the code.
    * Function expressions are not hoisted. They can only be called after they have been declared.

    ** Usage:

    * Function declarations are used when you need to define a function that can be called from anywhere within its scope, even before its declaration.
    * Function expressions are used when you want to assign a function to a variable or pass it as an argument to another function */