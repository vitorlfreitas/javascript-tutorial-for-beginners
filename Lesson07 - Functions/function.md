## Function

Functions are actions that are executed when you call them. 
Functions are very useful to avoid to repeat our code or when we want to split the responsibilities of our code. They turns our code cleaner and way more readable. 
Functions can receive parameters and change the action, and/or returns a result

**Let's do an analogy:**
- Every day when you wake up you drink water. Drink water is our function. However, you also drink coffee after the water, so instead of writing 2 functions (drinkWater, drinkCoffee), we can write one function drink() and adds the water, or coffee, or other drinkable liquid as a parameter. drink(water), or drink(coffee).

Our code:
```javascript
function drink(liquid) {
    console.log("I am drinking " + liquid);
}
drink(coffee);
drink(water);
```

Output:
> I am drinking coffee
> I am drinking water

Functions can be written anywhere, even in the end of our code.
