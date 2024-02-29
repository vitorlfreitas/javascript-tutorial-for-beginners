/* Arrow Functions

    * Arrow functions are a concise way to write anonymous functions.
    * It was introduced in ECMAScript 6. They provide a more readable and clean way to write functions.
    * It has some rules to follow in the syntax.
    
    * Structure:
    
        => No parameters 
        const myFunction = () => {
            Function Body
            return keyword
        };

        => (Optional) If the function has only one parameter, no parentheses
        const myFunction = parameter => {
            function code;
            return keyword
        };
        // Alternatively, you can add parentheses
        const myFunction = (parameter) => {
            function code;
            return;
        };

                
        => If there is only one line of code, you can omite the curly braces and the function keyword
        const myFunction = () => function code;


*/
// Examples

// Conventional Way:
const helloUser = function() {
    console.log("Hello, User!");
}
helloUser(); // Calling the Function

// Arrow Function
const helloWorld = () => console.log('Hello, World!');

helloWorld() // Calling the Arrow Function

