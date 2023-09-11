/*
** OBJECT PROPERTIES ->

>> Properties are the values associated with a JavaScript object.

>> A JavaScript object is a collection of unordered properties.

>> Properties can usually be changed, added, and deleted, but some are read only.

*/

// we can now use Dynamic Properties

let myName = "Robin";
const myBio = {
    [myName] : "Hello how are you ?",
    [21] : "is my age"
}
console.log(myBio);


// no need to write key and value, if both are same

let fName = "robin";
let age = 21;

const bio = {
    fName,
    age
}

console.log(bio);
