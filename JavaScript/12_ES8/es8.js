
/*

ES7 FEATURES ->

    1. String padding
    2. Object.values()
    3. Object.entries()
    4. Object.getOwnPropertyDescriptors()
    5. Trailing commas in function parameter lists and calls
    6. Async functions
    7. Shared memory and atomics
*/




// 1. String padding -->
// 
// >> The purpose of string padding is to add characters to a string, so it reaches a specific length.
// 
// **  padStart(targetLength [, padString])
// **  padEnd(targetLength [, padString])

const message = "Robin";

console.log(message.padStart(10)); 
console.log(message.padEnd(10));


// 2. Object.values() -->
// 
// >> This method returns an array containing all the object own property values.

const persons = { name: 'Fred', age: 87 };
console.log(Object.values(persons)); // ['Fred', 87]

// also works with arrays:

const peoples = ['Fred', 'Tony'];
console.log(Object.values(peoples)); // ['Fred', 'Tony']


 
// 3. Object.entries() -->
// This method returns an array containing all the object own properties, as an array of [key, value] pairs.


const person = { name: 'Fred', age: 87 }
console.log(Object.entries(person)); // [['name', 'Fred'], ['age', 87]]

// also works with arrays:

const people = ['Fred', 'Tony'];
console.log(Object.entries(people)) // [['0', 'Fred'], ['1', 'Tony']]
