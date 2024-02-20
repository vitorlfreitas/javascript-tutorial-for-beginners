
/*      *** Switch Case ***
    Similar to the if statement, but the difference is the sintaxe.
    It is more readable than the if statement when we have a lot of options
*/

// Let's suppose we have a menu here, and we are waiting for the user choose one option

let menu = 4; // User chose 6

switch (menu) {
    case 1:
        console.log("Do something");
        break;
    case 2:
        console.log("do something");
        break;
    case 3:
        console.log("Do something");
        break;
    case 4:
        console.log("do something");
        break;
    default:
        console.log("if any was true, do this then"); // Similar to else
}
