/*

** What is Object Literal ?

>>  Object Literal is a data type used to define objects in JavaScript.

>> Object literal is simply a key:value pair data structure.

>> Storing variables and functions together in one container, we can refer this as an Objects.

 */

// How to create an Object ?

// 1st way

let bioData = {
  myName: "Robin Kumar",
  myAge: 21,
  getData: function () {
    console.log(`My name is ${bioData.myName} and my age is ${bioData.myAge}`);
  },
};

bioData.getData();

// 2nd way no need to write functions after es6

let bio = {
  myName: "Robin Kumar",
  myAge: 21,
  getData() {
    console.log(`My name is ${bio.myName} and my age is ${bio.myAge}`);
  },
};

bio.getData();

// What if we want Object as a value inside an Object ?

let bioo = {
  myName: {
    fName: "Robin",
    mName: "Kumar",
    lName: "Yadav",
  },
  myAge: 21,
  getData() {
    console.log(`My name is ${bioo.myName} and my age is ${bioo.myAge}`);
  },
};

console.log(bioo.myName.lName);

/*

** What is this Object ?

>> The definition of "this" Object is that it contain the current context.
>> this Object can have different values depending on where it is placed.
>> It refers to the current context and that is window global object.
 */

// for Example 1
// console.log(this); // -->  it refers to the current context and that id widwon global object.

// example 2

// function myName() {
//     console.log(this);
// }
// myName();


// example 3

// var myNames = "robin";
// function myName() {
//     console.log(this.myNames);
// }
// myName();



// example 4

// const obj = {
//   myAge: 21,
//   myName() {
//     console.log(this.myAge);
//   }
// };
// obj.myName();



// example 5 (this object will not work with arrow function bcz arrow )

// const obj = {
//   myAge: 21,
//   myName : () => {
//     console.log(this.myAge);
//   }
// };
// obj.myName();



// example 6

let bioDta = {
    myName : {
        fName : "Robin",
        lName : "Kumar"
    },
// things to remember is that myName is the key and the object is act like a value
    myAge : 21,
    getDta() {
        console.log(`My name is ${this.myName.lName} and my age is ${this.myAge}`);
    }
}
bioDta.getDta();
