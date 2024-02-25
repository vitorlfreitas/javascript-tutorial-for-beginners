// Iterating Our Objects

// Assign my obj
const person = {
    name: 'Vitor',
    age: 45
}

// Review: Bracket notation 
console.log(person['name']); // Vitor

// Using the for in
for (let key in person) {
    console.log("Attribute: " + key + " | Value: " + person[key]);
}
// key is equal to the attributes, so we can use the brackets notation to get the value. 

// Using the method of the Object class
for (let value of Object.keys(person)) {
    console.log('Attribute: ' + (value) + ' | Value: ' + person[value]);
}

// We can also use the in to check if the object has a specific attribute
if ('name' in person) console.log('There is name attribute in the person object');
else console.log('There is not name attribute in the person object');

if ('gender' in person) console.log('There is gender attribute in the person object');
else console.log("There is not gender attribute in the person object");

