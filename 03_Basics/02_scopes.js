// let a = 10;
// const b = 20;
// var c = 30;

if (true) {
  let a = 10;
  const b = 20;
  var c = 30;
  //   console.log("Inner: ", a);
}

// console.log(a);
// console.log(b);
// console.log(c);

function one() {
  const username = "Daniyal";

  function two() {
    const profession = "Web dev";
    console.log(username);
  }

  //   console.log(profession);

  two();
}

// one();

// ========================= interesting ===================================

console.log(addOne(3));

function addOne(num) {
  return num + 1;
}

// console.log(addTwo(4));
// also called expression in js variables are very powerful and they can hold function
const addTwo = function (num) {
  return num + 2;
};

// console.log(addTwo(4));
