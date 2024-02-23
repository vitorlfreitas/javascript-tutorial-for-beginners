// For-of Loop

/* 
    A new feature that works perfectly with iterable objects.
    The for...of loop iterates over the VALUES of an iterable object, such as an array, Set, Map, string, etc. However, it does not directly provide access to the index of each element like the traditional for loop. 
*/

let arr = [10, 20, 30, 40, 50, 60];

for (const value of arr) 
    console.log(value)

/*
10
20
30
40
50
60
*/