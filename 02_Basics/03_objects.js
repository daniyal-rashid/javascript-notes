// singleton objects
// const user = new Object();

// object literals
// const user = {}

const mySym = Symbol("Key");

const user = {
 "full name": "daniyal",
  name: "daniyal",
  email: "daniyal@gmial.com",
  age: 20,
  isLoggedIn: false,
  location: "karachi",
  loginHistory: ["monday", "firday"],
  [mySym] : "value",
  greeting: function () {
    console.log("helloo !")
  },
  greetingTwo : function () {
    console.log(`Good Morning! ${this.name}`);
  }
};

// console.log(user);
// console.log(user.loginHistory);
// console.log(user["name"]);
// console.log(user["full name"])
// console.log(user[mySym])    

user.email = "daniyal123@gmail.com";
Object.freeze(user);
user.email = "someone@gmail.com";

// console.log(user.greeting)  // show reference function is not executing
// console.log(user.greeting()) // executes the function

console.log(user.greetingTwo())