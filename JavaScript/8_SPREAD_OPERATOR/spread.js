/*

** SPREAD OPERATOR->

>> spread operator (...) allows us to quickly copy all
or part of an existing array or object into another array or object.

>> The spread operator is often used in combination with destructuring.

>> We can use the spread operator with objects too:
*/

const colors = ['red', 'green', 'blue', 'white', 'pink'];

const myColors = ['yellow', 'black'];

// 2nd time add one more color on top then we need write it again on myColor array too

const myFavColors = [...colors, ...myColors];

console.log(myFavColors);