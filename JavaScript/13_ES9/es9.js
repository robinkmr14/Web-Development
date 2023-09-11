/*
ECMASCRIPT 2019 FEATURES -->

  1.  Array.prototype.{flat,flatMap}
  2.  Optional catch binding
  3.  Object.fromEntries()
  4.  String.prototype.{trimStart,trimEnd}
  5.  Symbol.prototype.description
  6.  JSON improvements
  7.  Well-formed JSON.stringify()
  8.  Function.prototype.toString()

*/

/*Array.prototype.{flat,flatMap}

>> flat() is a new array instance method that can create a one-dimensional array from a multidimensional array.

>> By default it only “flats” up to one level, but you can add a parameter to set the number of levels 
you want to flat the array to. 

>> Set it to Infinity to have unlimited levels:
*/

const arr = [
  ["Zone_1", "Zone_2"],
  ["Zone_3", "Zone_4"],
  ["Zone_5", "Zone_6"],
  ["Zone_7", "Zone_8"], ["Zone_7", "Zone_8"]
];

console.log(arr.flat(Infinity));



/*
 Object.fromEntries()

>> ES2019 introduces a new Object.fromEntries() method, 
>> which can create a new object from such array of properties:
*/ 

const person = { name: 'Robin', age: 21 };
const entries = Object.entries(person);
console.log(entries);

const newPerson = Object.fromEntries(entries);
console.log(newPerson);