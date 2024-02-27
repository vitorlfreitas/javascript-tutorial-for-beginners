// Lesson12 Arrays Methods - Every and Some Method

const numbers = [1, 0, 3];

/*          *** Every Method ***
    It is used to check if all the elements satisfy determined condition and returns a boolean value
*/
const areAllNaturalNumbers = numbers.every((value) => value > 0);
console.log(areAllNaturalNumbers); // False because there is 0

/*          *** Some ***
    It is used to check if at least one element has satisfies the specific condition */

const hasAtLeastOneEvenNumber = numbers.some((value) => value % 2 == 0);
console.log(hasAtLeastOneEvenNumber); // True, because there is the number 0 that is even.