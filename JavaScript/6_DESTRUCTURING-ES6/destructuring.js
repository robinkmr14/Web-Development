/*

DESTRUCTURING IN ES6 ->

>> The destructuring assignment syntax is a JS expression that makes it possible to unpack values from arrays,
or properties from objects, into distinct variables.

*/

// ARRAY DESTRUCTURING --> (When destructuring arrays, the order that variables are declared is important.)

const myBio = ["Robin", "Kumar", 21];

// Here is the old way of assigning array items to a variable:

let fName = myBio[0];
let lName = myBio[1];
let myAge = myBio[2];

console.log(myAge);

// Here is the new way of assigning array items to a variable With destructuring:

let [myFName, myLName, age] = myBio;
console.log(myLName);

// we can add values too:

let [name, lstName, mAge, myDegree = "BCA"] = myBio;
console.log(myDegree);

// OBJECT DESTRUCTURING -> (Notice that the object properties do not have to be declared in a specific order.)

// Here is the old way of using an object inside a function:

const vehicleOne = {
  brand: "Mahindra",
  model: "Thar",
  type: "car",
  year: 2021,
  color: "black",
};

// old way
function myVehicle(vehicle) {
  const message = `my ${vehicle.type} is a ${vehicle.color} ${vehicle.brand} ${vehicle.model}`;
  console.log(message);
}
myVehicle(vehicleOne);


// Here is the new way of using an object inside a function:

const myVehicles = {
  brand: "Ford",
  model: "Mustang",
  type: "car",
  year: 2021,
  color: "red",
};

// new way
function Vehicle({ type, color, brand, model }) {
  console.log(`My ${type} is a ${color} ${brand} ${model}`);
}
Vehicle(myVehicles);
