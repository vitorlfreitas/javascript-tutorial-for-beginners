/*  *** JavaScript is strange ***    

"Truthy" and "Falsey" are terms used to describe the boolean interpretation of non-boolean values in conditional contexts.
JavaScript tries to convert all non-boolean elements into a boolean values in conditional context. They receive the name "truthy" and "falsey"

Some examples of values that are considered "falsey":
    1 - false
    2 - 0 (zero)
    3 - '' or "" (empty string)
    4 - null
    5 - undefined
    6 - NaN

Values that are not explicitly "falsey" are considered "truthy." Such as:

    1 - true
    2 - any non-zero number
    3 - any non-empty string
    4 - any non-empty object
    5 - any non-empty array
    6 - Functions (any defined function)

When using conditional statements like if statements or ternary operators, JavaScript automatically converts values to their boolean equivalents. It is very useful to write defaults values, when we are not sure if the user has selected a value. For example:
*/

function validateForm() {
    
    let email = document.querySelector('#email').value;
    let password = document.querySelector('#password').value;

    // Check if email and password are truthy
    if (email && password) {
        alert("Welcome back");
        return true;

    } else if (email && !password) {
        alert("Invalid Password.");
        return false;
    }
    else {
        alert("Enter a valid email ");
        return false;
    }
}

