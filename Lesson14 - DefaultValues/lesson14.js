/* Default Values in JavaScript
    
    * Default values are used to provide a values for variables in case they are not assigned by the user or if  they are set as undefined.
    * Default values ensures that your code works even when certain parameters or variables are not defined or have missing values 
    */

// * Before the ES6, we had another way to set default values
function sayHello(name) {

    let user = name || 'Guest';
    console.log(`Welcome, ${user}`); 
}

// Calling the function with any parameter
sayHello(); // Welcome, Guest

// Calling the function assigning a value
sayHello("Jonh"); // Welcome, Jonh

// * The new way to set default values
function greetUser(name = 'User') {
    console.log(`Hello, ${name}`);
}

// Calling the function with any parameter
greetUser(); // Hello, User





