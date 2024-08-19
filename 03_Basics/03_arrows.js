const user = {
  username: "daniyal",
  price: 999,
  welcomeMessage: function () {
    console.log(`${this.username}, welcome to website`);
    console.log(this);
  },
};

// user.welcomeMessage();
// user.username = "john";
// user.welcomeMessage();

// console.log(this);

function one() {
  console.log("hellooo");
  console.log(this);
}

// one();

const demo = function () {
  let username = "daniyal";
  console.log(this.username);
};

// demo();

const arrowfunc = () => {
  let username = "daniyal";
  console.log(this);
};

arrowfunc();

// Explicit Function
// const sum = (num1, num2) => {
//   return num1 + num2;
// };

// Implicit Function
// const sum = (num1, num2) => num1 + num2;
// const sum = (num1, num2) => (num1 + num2);

// const sum = (num1, num2) => ({ usename: "daniyal" });

// console.log(sum());

// const myArray = [3, 5, 6, 8];

// myArray.forEach();
