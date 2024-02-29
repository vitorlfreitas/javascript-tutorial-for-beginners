/*          *** Lesson15 - Rest Operator ***

    * The rest operator is represented by three dots .... (It is not the Spread Operator).
    * It allows you to gather up the remaining arguments in a function into an ARRAY. Here's a simple explanation:

    * Imagine you're organizing a party at your home, and your guests may bring different numbers of candies, cakes, beers and so on. Moreover, you do not know how many items they will bring, some of them may bring one thing, others may bring three or more. You do not know how many item they will bring but you still want to get all these items. 
    * The rest operator is the tool to help you with that.
*/
// * You are developing a software for the party

function bringItems(...items) {
    if (items.length === 0)
        console.log('No items brought');
    else if (items.length > 1) {
        console.log(`Items: `);
        items.forEach((value, i) => console.log(`${i}: ${value}`));
    }
    else
        console.log(items[0]);
}

bringItems()
bringItems('Juice');
bringItems('Cake', 'Beer', 'Wine', 'Gifts');

// You can also have others parameters BEFORE the rest operator
// You are developing an online store 

function sumFinalPrice(discount, ...items) {
    
    if (items.length === 0) return 0;
    
    let sumPrice = items.reduce((a,b) => a + b);

    if (discount > 0) {
        let discountValue = sumPrice * (discount / 100);
        let finalPrice = sumPrice - discountValue ;
        return `$ ${finalPrice}`;
    }
    return `$ ${sumPrice} `;
}

console.log(sumFinalPrice(0, 15.0, 200.00, 300.00, 15.0)); // $530
console.log(sumFinalPrice(10, 200.00)); // $180
console.log(sumFinalPrice(50, 200.00, 300.00)); // $250


