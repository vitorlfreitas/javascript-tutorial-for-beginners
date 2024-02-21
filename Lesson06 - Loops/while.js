/*      *** Lesson06 Part01 - Loop While ***

    Loops in programming is an action which repeats n times until a specific condition turns into false.
    When we write a loop, we need two things: boolean condition and the code that will break the loop
    While is a loop which verifies the condition in the beginning, if the condition is true, then It executes the code until the condition gets false

    There is 2 ways to break a loop.
    1° is using an increment or code that turns the boolean condition false
    2° is using the key word break
    Structure
    while (condition) {
        if true executes this code
    }

*/
let randomNumber = Math.round(Math.random() * 100);
let guessNumber = Math.round(Math.random() * 100);
let attempts = 0;

while (attempts < 10 ) // While attempts is less than 10, it will repeat the code
{
    if (randomNumber === guessNumber) {
        console.log("You win!");
        break; // Keyword Break is used to break loops.
    }
    else {
        console.log("Wrong");
        attempts++; // Increment Operator, adds 1 to the variable
    }
}
// If attempts is equal to 10, we can assume that the loop was not broken, so they did not guess the number
if (attempts === 10) 
    console.log("Game Over!");
else 
    console.log(`You Win!`);


// Now, uncomment the code below [ctrl + ;]

// let target = 6;
// let guessNumber2 = 3;
// let attempts2 = 0;

// while (attempts < 10 ) // While attempts is less than 10, it will repeat the code
// {
//     if (target === guessNumber2) {
//         console.log("You win!");
//         break; // Keyword Break is used to break loops.
//     }
//     else {
//         console.log("Wrong");
//         attempts2++; // Increment Operator, adds 1 to the variable
//     }

//     // We will increment the guessNumber, so it will get the target number in the third iteration
//     guessNumber2++;
// }
// // If attempts is equal to 10, we can assume that the loop was not broken, so they did not guess the number
// if (attempts2 === 10) 
//     console.log("Game Over!");
// else 
//     console.log(`You Win!`); 