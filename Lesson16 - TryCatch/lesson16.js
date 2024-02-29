/*          *** Handling Exceptions ***

    * Try and Catch and sometimes Finally are used to handle exceptions, error, or unexpected behaviors that might happen while the execution of the code.
    * Try is used when you want to monitor errors. If an error occurs, then the catch enters in action
    * Catch is where we handle the error. We can write a code that will be executed to handle the error.
    * Finally is rarely used, but it is used when you write the code and either your code has thrown any error or if it has, it will be executed
    * Syntax:
        try {
            code
        } catch (exception) {
            code to be executed if the code occurs
        }
    
    * Using try and catch can prevent your application from crashing due to unhandled exceptions. By catching errors, you can provide feedback to users or log errors for debugging purposes while ensuring that the application continues to function.

*/

function sumNumbers(nums) {
    try {
        return nums.reduce((a, b) => a + b);
    } catch (exception) {
        return undefined;
    }
}

const numbers = [1, 2, 3, 4, 5, 6]

const sum = sumNumbers(true);

console.log(sum); // undefined

// But our code has not broken

