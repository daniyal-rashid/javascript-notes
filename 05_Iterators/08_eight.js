const myNums = [1, 2, 3, 4];

// const myTotal = myNums.reduce((accumulator, currentValue) => {
//   console.log(`acc: ${accumulator} and currval: ${currentValue}`);
//   return accumulator + currentValue;
// }, 0);

const myTotal = myNums.reduce((acc, crr) => acc + crr, 0);

// console.log(myTotal);

const shoppingCart = [
  {
    itemName: "js course",
    price: 2999,
  },
  {
    itemName: "py course",
    price: 999,
  },
  {
    itemName: "mobile dev course",
    price: 5999,
  },
  {
    itemName: "data science course",
    price: 12999,
  },
];

// const totalPrice = shoppingCart.reduce((acc, item) => {
//   return acc + item.price;
// }, 0);

const totalPrice = shoppingCart.reduce((acc, item) => acc + item.price, 0);
console.log(totalPrice);
