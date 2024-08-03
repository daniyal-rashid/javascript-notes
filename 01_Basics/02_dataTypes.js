"use strict"; // treat all code as newer version

// alert(3 + 3); // we are using node not browser

console.log(3 + 3);
console.log("Hitesh"); // code readability should be high

// Data Types
/*
number => e.g: 1, 34, 999 ...  (range 2 to power 53)
bigint => use to store bigger numbers
string => denoted by double or single quote "" e.g: "My name is daniyal ..."
boolean => true or false
null => standalone value
undefined => value is not defined or assigned to varible
symbol => unique
*/

let num = 123;
let str = "hi how are you";
let isloggedIn = false;
let name = null;
let email;

// console.log(num, str, isloggedIn, name, email);

// for line break use \n

// console.log(num, "\n", str, "\n", isloggedIn, "\n", name, "\n", email);

// Typeof operator => returns datatype of vairable or an expression

console.log(typeof null); // object
console.log(typeof undefined); // undefined
