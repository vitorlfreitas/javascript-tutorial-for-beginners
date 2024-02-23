// For in loop

// For in is often used to iterate the attributes of an array, so it is very simple, but in the beginning very confusing as well.

// Object
const myDog = {
    breed: 'Husky',
    name: 'Rex',
    color: 'White'
}

//  For in will iterate all attributes of the object
/*
    Structure:
    for (let key in object) {
        code...
    }

    If it is only one code, we can remove the brackets

*/ 
for (let key in myDog) 
    console.log(key);

/* What happened in this code?
We initialize the loop and then the key will get the value of the name of the attribute.

So, if we runs this code, the output is:
    breed
    name
    color

Remember that there are two way to get the value of the object's attribute:

    -> Dot notation: obj.attribute

    -> Bracket notation: obj["name of the attribute"]

    So, as the variable key gets the name of the attribute, if we want to know the value, we only need to use the brackets notation

    Take a look:
*/

for (let key in myDog)
    console.log(key + " | " + myDog[key]);

    // It is equal to myDog["attribute"], since the key will get the name of the attribute

    /* Output:
    breed | Husky
    name | Rex
    color | White
    */