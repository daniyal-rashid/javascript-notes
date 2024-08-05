//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol("123");
const anotherId = Symbol("123");

console.log(id === anotherId);

const bigNumber = 3456543576654356754n;
console.log(typeof bigNumber);

// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
  name: "hitesh",
  age: 22,
};

const myFunction = function () {
  console.log("Hello world");
};

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3

// ==========================================================================

// Stack (Primitive) , Heap (Non - Primitive)

// e.g => Primitive
let myname = "Daniyal";
let newName = myname;
newName = "Ali";

console.log(newName);
console.log(myname);

// e.g => Non Primitive
let userOne = {
  Id: 121,
  email: "daniyal@gmail.com",
};

let userTwo = userOne;
userTwo.email = "haris@gmail.com";
userTwo.Id = 131;

console.log(userOne);
console.log(userTwo);
