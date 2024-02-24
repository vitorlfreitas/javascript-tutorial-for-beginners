//  *** Reference Types - Objects ***

// Analyze this code
let myDogName = "Rex";
let myDogAge = 0.25;
let myDogBreed = "Husky Siberiano";
let myDogColor = "Grey and White";

/*
    What is the problem?
    These variables are related, they all are characteristics of my dog. However, they do not have any connection among them. It is a problem and very confusing. Can you imagine these variables in a project with more than 100 lines of code. One time, we will lose control of them and it means, we will lose information.

    So, how to solve it?

    The answer is, Objects.

    Object is equal to an object in the real world. It is a group of properties and sometimes actions that  defines an object. Confusing? I know, but see the next code
*/ 

// Compare both code, which one is easier to identify its functionalities?
let myDog = {
    name: "Rex",
    age: 0.25,
    breed: "Husky Siberiano",
    color: "grey and white"
}

// An object has attributes and methods, but methods we will cover in the future.
// Attributes are: name, age, breed, size, and so on
// How to get these values?

// There is the Dot notation
console.log(myDog.name); 

// We can also set another values
myDog.age = 1;
console.log(myDog.age);

// There is the Bracket notation
myDog["age"] = 2;
console.log(myDog.age);
