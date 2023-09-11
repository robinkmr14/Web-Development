/*
NEW FEATURES IN ES2020 -->

  1.  BigInt
  2.  String matchAll()
  3.  The Nullish Coalescing Operator (??)
  4.  The Optional Chaining Operator (?.)
  5.  Logical AND Assignment Operator (&&=)
  6.  Logical OR Assignment (||=)
  7.  Nullish Coalescing Assignment (??=)
  8.  Promise allSettled():
  9.  Promise.allSettled([prom1,prom2,prom3]).then {}
  10.  Dynamic Import

*/

/*

>> BigInt

>> JavaScript BigInt variables are used to store big integer values
that are too big to be represented by a a normal JavaScript Number.

>> JavaScript integers are only accurate up to about 15 digits.

>> To create a BigInt, append n to the end of an integer or call BigInt():

 */

let x = 9999999999999999;
console.log(`normal int ${x}`); // 10000000000000000
console.log(typeof x); // number

let y = 9999999999999999n;
console.log(`BigInt ${y}`); // 9999999999999999
console.log(typeof y); // BigInt


/* 
>> String matchAll()

>> used to search for all occurrences of a string in a string.

>> If the parameter is a regular expression, the global flag (g) must be set set,
otherwise a TypeError is thrown.

>> If you want to search case insensitive, the insensitive flag (i) must be set:
*/ 

// let text = "I love cats. Cats are very easy to love. Cats are very popular.";
// const rslt = text.matchAll("Cats");
// console.log(rslt);



/*

>> Nullish Coalescing Operator (??)

>> The ?? operator returns the first argument if it is not nullish (null or undefined).
Otherwise it returns the second.

*/

let name = null;
let txt = "missing";
let result = name ?? txt;
console.log(result); // missing



/*
 >> Optional Chaining Operator (?.)

 --> The Optional Chaining Operator returns undefined 
if an object is undefined or null (instead of throwing an error).

*/

const car = {type:"Fiat", model:"500", color:"white"};
let nm = car?.nm;
console.log(nm); // undefined
