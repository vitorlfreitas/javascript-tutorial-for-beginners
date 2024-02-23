// Web development - Intro
// alert('Hello, World!');

// Even though they have the same name, they are different
let elementPId = document.getElementById("paragraph");

// getElementsByClassName returns a collection of elements, 
let elementPClass = document.getElementsByClassName("paragraph")[0];

elementPId.innerHTML = "I am manipulating the the text";

elementPClass.innerHTML = "I am manipulating this element";

function changingAgain() {
    // Using the Selector we can select any element, class, id and so on
    let firstP = document.querySelector("#paragraph");
    firstP.innerHTML = "Changing again"
}
function displayOriginal() {

    let firstP = document.querySelector("#paragraph"); // ID == #
    firstP.innerHTML = "I am manipulating the text"
}

function changingSecondElement() {

    let secondP = document.querySelector(".paragraph"); // Class == .

    secondP.style.transition = "150ms";
    secondP.style.fontSize = "2rem";
    secondP.style.fontWeight = "600";
    secondP.style.background = "#ddd";
    secondP.style.height = "25%"
    secondP.style.padding = "20px 10px";
}
function showOriginal() {

    let secondP = document.querySelector(".paragraph"); // Class == .

    secondP.style.fontSize = "1.3rem";
}

function boldingList() {
    let element = document.querySelector("ol");
    let elements = document.querySelectorAll("li");

    elements.forEach((element) => {
        element.style.transition = "350ms";
        element.style.fontSize = "1.125rem";
        element.style.fontWeight = "700";
        
});
    element.style.border = "1px solid black";
    element.style.borderRadius = "16px";
    element.style.padding = "10px";
    
}
function original() {
    let element = document.querySelector("ol");
    let elements = document.querySelectorAll("li");

    elements.forEach((element) => {
        element.style.transition = "350ms";
        element.style.fontSize = "1rem";
        element.style.fontWeight = "400";
        
});
    element.style.border = "none";
    element.style.padding = "0px";
}

// Enjoy yourself and play with this webpage