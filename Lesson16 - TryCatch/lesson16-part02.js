//          *** Exceptions in JavaScript ***

/*
    * If you are a Java Developer, you know that Exception in Java is a bit more complex, you have to first create a new class, define your custom exception, add a constructor, maybe add methods, and then you implement in your code. In JavaScript is way simpler than that. 

    * Take a Look:
*/

function divideNumbers(num1, num2) {
    if (num2 === 0)
        throw new Error('You tried to divide a number by zero');

        return num1 / num2;
}

try {
    console.log(divideNumbers(1, 0));
}
catch (error) {
    // We can display the error
    console.log("Something went wrong! Error: " + error);
}

/*          ** Advantages of Custom Exception

    * Control Flow: By defining custom exceptions, you can make your code more readable and maintainable. This enhances the clarity of your code and make your code easier to find errors. 
    * Custom exceptions can provide additional context and information about the error, helping with debugging. You can include specific details or properties within custom exception objects to provide insights into the cause of the error, making it easier to identify and resolve issues in your code.
*/