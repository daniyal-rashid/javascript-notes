function printName() {
  console.log("D");
  console.log("A");
  console.log("N");
  console.log("I");
  console.log("Y");
  console.log("A");
  console.log("L");
}

// printName();

function addTwoNumbers(num1, num2) {
  //   console.log(num1 + num 2);
  return num1 + num2;
}

const result = addTwoNumbers(2, 4);
// console.log("Result: ", result);

function loginUserMessage(username = "snow") {
  if (username === undefined) {
    // console.log("please enter username");
    return `Please enter username`;
  }
  return `${username} just logged In`;
}

// console.log(loginUserMessage("daniyal"));

function calculateCartPrice(...numbers) {
  return numbers;
}

// console.log(calculateCartPrice(10, 20, 30, 40, 50));

user = {
  name: "Daniyal",
  age: 21,
};

function printUserInfo(anyobject) {
  return `usernmae is ${anyobject.name} and age is ${anyobject.age}`;
}

// console.log(printUserInfo(user));
// console.log(printUserInfo({ name: "Subhan", age: 20 }));

const array1 = [100, 200, 300, 400, 500];

function returnSecondValue(anyArray) {
  return anyArray[1];
}

// console.log(returnSecondValue(array1));
// console.log(returnSecondValue([5, 10, 15, 20, 25]));
// console.log(returnSecondValue(["Daniyal", "Subhan", "Haris"]));
