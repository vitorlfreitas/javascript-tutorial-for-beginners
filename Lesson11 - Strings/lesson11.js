// Read the documentation => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String

// String - Methods

let word1 = 'Eat';
let word2 = ' and Drink';

// String are kind of an array of characters, we can use these methods
console.log(word1.length); 
console.log(word1[0]);

// ** typeof **
// Return the type of the variable. (Applicable to any variable)
console.log(typeof(word1)); // string

// ** Trim **
let surname = '     Cabral      '
console.log(surname.trim()); // Removes the white space before and after the word
console.log(surname.trimStart()); // Removes the white space before the word
console.log(surname.trimEnd()); // Removes the white space after the word

// ** charAt **
// Return the char
console.log(word1.charAt(2)); // t

// ** charCodeAt **
// Return the char code
console.log(word1.charCodeAt(2)); // 116

// ** concat **
// Concat two or more string variables into one variable
let verbs = word1.concat(word2);
console.log(verbs); // Eat and Drink

// ** indexOf **
// Return the index, if the parameter is not found, it returns -1. It is sensitive case
console.log(word1.indexOf('E')); // 0
console.log(word1.indexOf('e')); // -1

// ** lastIndexOf **
// Return the last index found, or -1 if not found
let word3 = 'Impossible';
console.log(word3.indexOf('s')); // 4
console.log(word3.lastIndexOf('s')); // 5

// We can use if white space as well
console.log(word3.indexOf('')); // 0
console.log(word3.lastIndexOf('')); // 10

// ** localeCompare **
// Comparison - It is also case sensitive
console.log(word1.localeCompare(word1)); // Return 0 if they are equal
console.log(word3.localeCompare(word1)); // Return 1 if the main variable is longer than the string in the parameter
console.log(word1.localeCompare(word3)); // Return -1 if the string in the parameter is longer than the main string
// ** Note: Main String: The variable that is calling the function **

// ** Replace **
// The Replace() method only replaces the first character or word or complete sentences found
console.log(word1.replace("E", "B")); // Bat

// ** Search **
// Return the first index found
console.log(word1.search("E")); // 0
console.log(word1.search("z")); // -1

// ** Slice **
let noun = "Chocolate";
console.log(noun.slice(0,5)); // Choco

// ** Split **
let phrase = "I like chocolate";
console.log(phrase.split(" ")); // [ 'I', 'like', 'chocolate' ]

// We can assign the value to a variable
let arrayFrase = phrase.split(" ");
console.log(arrayFrase); // [ 'I', 'like', 'chocolate' ]

// Substring
let myName = "I am Vitor Freitas";

let parte1 = myName.substring(9,14);
console.log(parte1); // Vitor

// UpperCase & LowerCase

let upperName = myName.toUpperCase();
console.log(upperName);

let lowerCase = myName.toLowerCase();
console.log(lowerCase);

// ** toString **
let num = 10;
num = num.toString();
console.log(num); // "10"
console.log(typeof(num)); // string


// ** startsWith() & endsWith() **

let phrase2 = new String("Work hard is essential");

// Check if the string starts with the parameter. It can be a letter, a word or a phrase and it returns a boolean
console.log(phrase2.startsWith("Dream")); // faLse
console.log(phrase2.startsWith("Work")); // true
console.log(phrase2.endsWith("b")); // false
console.log(phrase2.endsWith("al")); // true

// ** Includes **
console.log(phrase2.includes("hard")); // true
console.log(phrase2.includes("i")); // true
console.log(phrase2.includes("z")); // false

// ** Repeat **
console.log(phrase2.repeat(2)); // Work hard is essentialWork hard is essential

// ** fromCodePoint **
let cachorro = "Dog"
console.log(cachorro.charCodeAt(0)); //68
console.log(cachorro.charCodeAt(1)); // 111
console.log(cachorro.charCodeAt(2)); // 103

console.log(String.fromCodePoint(68, 111, 103)); // Dog





