// Creating objects

// Constructor Functions
function Cat(name) {
    this.name = name;
    this.eat = () => console.log('eating...');
}

const myCat = new Cat('Chloe');
console.log(myCat.name);
myCat.eat();

// Factory Function
function createDog(name) {
    return {
        name,
        eat() {
            console.log('eating...');
        }
    }
} 
const myDog = createDog('Bob');
console.log(myDog.name);
myDog.eat();
