// Lesson12 Arrays - Part 2

// We will continue to cover some methods

const myGrades = [8, 7, 4.5];

// ** Primitive Types 

/*          *** Sorting ***
    Organizes the array in order alphanumeric */
myGrades.sort();
// [ 4.5, 7, 8 ]

/*          *** Reverse ***
    Reverse the order of the elements */
myGrades.reverse();
// [ 8, 7, 4.5 ]

// ** Reference Type
const myCats = [
    {name: 'Mistery', breed: 'Siamese'},
    {name: 'Black Panther', breed: 'British Shorthair'},
    {name: 'Alisa', breed: 'Siamese'},
    {name: 'Odin', breed: 'Persian'},
    {name: "Nightfall", breed: 'Ragdoll'}
];

//          *** Sorting ***
myCats.sort((cat1, cat2) => {
    
    // We have to use this, because de ASCII. If we do not convert the names to UpperCase, it will consider the char code. As a result, Capital letter will always come first than Lower case.
    
    const nameCat1 = cat1.name.toUpperCase();
    const nameCat2 = cat2.name.toUpperCase();
    
    // This is a convention JavaScript asked for
    if (cat1.name < cat2.name) return -1;
    if (cat1.name > cat2.name) return 1;
    return 0
});

console.log(myCats);

//          *** Reversing ***
myCats.sort((cat1, cat2) => {

    // You learned how to sort, can you guess how to reverse?
    
    const nameCat1 = cat1.name.toUpperCase();
    const nameCat2 = cat2.name.toUpperCase();
    
    // Just change the return statement, where was -1 becomes 1..
    if (cat1.name < cat2.name) return 1;
    if (cat1.name > cat2.name) return -1;
    return 0
});

console.log(myCats);

/*          *** Concat ***
    Join two or more arrays into a new array */

const numbers = [0, 20, 15, 20];
const moreNumbers = [0, 1, 2, 3];
const concatArrays = moreNumbers.concat(numbers);

console.log(concatArrays);
/* Output:
[
    0,  1,  2,  3,
    0, 20, 15, 20
]
*/