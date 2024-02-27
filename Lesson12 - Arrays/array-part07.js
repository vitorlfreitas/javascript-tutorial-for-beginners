// Lesson 12 - Arrays - Part 7

/*         *** Join ***
    The join method is used to join all the elements of an array into a single String
    It concatenates the elements using the specific separator passed as a parameter or with comma  as a default

*/

const arr = [1, 2, 3, 4];
const string1 = arr.join();
console.log(string1);// It will turn the array into "1,2,3,4"

const string2 = arr.join(' '); // It will separate the elements by one white space
console.log(string2); // 1 2 3 4 

/*          *** Split ***
    It is the opposite of Join method, it separates an string and returns an array.
    You can define what is the separator passing the value as a parameter. You can use white space, or any element.
    If you do not pass any value as a parameter, then the entire string will be part of an array. */

const phrase = "I am Vitor";
const phraseArr = phrase.split(' ');
const oneElementArray = phrase.split();
console.log(phraseArr); // [ 'I', 'am', 'Vitor' ]
console.log(oneElementArray); // [ 'I am Vitor' ]