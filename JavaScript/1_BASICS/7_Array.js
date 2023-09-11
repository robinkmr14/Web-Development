// Array in JS

/*
---> Traversal of an array
---> Searching and filter in an array
---> How to sort and compare an array
---> Hot to Insert, Add, Delete, Replace elements in array(CRUD)
---> Map(), Reduce(), Filter()
*/

// Traversal of an array
var myFriends = ["Raj", "Sahil", 'Vishal', 'Rahul'];

console.log(myFriends[2]); // Vishal


// Want to check the length of elements of an array
console.log(myFriends.length); // 4

// We use for loop to navigate
for (var i = 0; i < myFriends.length; i++) {
    console.log(myFriends[i]);
}

// for..in loop--> (used to print the index of an array elements)
for (let elements in myFriends) {
    console.log(elements)  // 0 1 2 3 
}


//for..of loop--> (used to print the elements of an array)
for (let element of myFriends) {
    console.log(element)
}


// forEach loop
myFriends.forEach(function (elmnt, index, array) {
    console.log(elmnt + " : " + index + " --> " + array)
});

// forEach loop with fat arrow function
var frnd = ["pintu", "sintu", "bantu"];

frnd.forEach((el, indx, arr) => {
    console.log(el + " : " + indx + " --> " + arr)
});


// Perform CRUD

// Insert elements ---> push() method adds one or more elements to the end of an array.
const animals = ["Pigs", "goats", "Sheep"];

const count = animals.push("chicken", "Cow", "Dog");
console.log(animals);
console.log(count); // 4


// unshift() method adds one or more elements to the beginning of an array
const birds = ["Parrot", "Crow", "Sparrow"];

const newBird = birds.unshift("Ostrich", "Dodo");
console.log(birds);
console.log(newBird);


// Removes the elements ---> pop() method removes the last element from an array.
const wildAnimals = ["Lion", "Tiger", "Fox", "cheeta"];

console.log(wildAnimals);
console.log(wildAnimals.pop());
console.log(wildAnimals);


// shift() method removes the first element from an array 
const vegitables = ["Potato", "Brinjal", "Cabbage"];

console.log(vegitables);
console.log(vegitables.shift());
console.log(vegitables);


// splice() method adds and remove elements from an array. --> 
// Syntax:- array.splice(index, howmany, item1, ....., itemX)

const months = ["jan", "Feb", "mar", "Aprl",];

const newMonths = months.splice(months.length, 0, "May");
console.log(months);


// Update the element from an array
const days = ["Mon", "tue", "Wed"];

const indexOfDays = days.indexOf("Wed"); // indexOf return the index no of an element from an array

if (indexOfDays != -1) {
    const updateMonth = days.splice(indexOfDays, 1, "Wednesday");
    console.log(days);
} else {
    console.log("Data not found");
}


// map() Return a new array with the square root of all element values
const number = [4, 5, 6, 7];
let newNumber = number.map((curElmnt, index, number) => {
    return `Index no = ${index} and the value is ${curElmnt} belong to ${number}`;
});
console.log(newNumber);


// PRACTICE..
// 1. Find the square root of each element in an array
let arr = [25, 36, 49, 64, 81];

let squareRoot = arr.map((currentElmnt) => Math.sqrt(currentElmnt));
console.log(squareRoot);

// 2. Multiply each element by 2 and return only those elements which are greater than 10
let ar = [2, 3, 4, 6, 8];

let ar2 = ar.map((curElm) => curElm * 2).filter((curElem) => curElem > 10);
console.log(ar2);

/* 
1. Reduce() method --> Flatten an array means to convert the 3d or 2d array into a single dimensional array.
2. The reduce() method a reducer function (that you provide on each element of the array,
   resulting in a single output value).
3. The reducer function takes four arguments :
--> Accumulator
--> Current Value
--> Current index
--> Source Array
Syntax:- array.reduce(function(total, currentValue, currentIndex, arr), initialValue)
 */

let arrr = [5,6,2];

let sum = arrr.reduce((accumulator, curElmn, index, arrr) => accumulator += curElmn,3);
console.log(sum);

// convert the 3d or 2d array into a single dimensional array.

const a = [
    ['Zone_1', 'Zone_2'],
    ['Zone_3', 'Zone_4'],
    ['Zone_5', 'Zone_6'],
    ['Zone_7', 'Zone_8'],
];

let faltArr = a.reduce((accum,currval) =>{
    return accum.concat(currval);
});
console.log(faltArr);
