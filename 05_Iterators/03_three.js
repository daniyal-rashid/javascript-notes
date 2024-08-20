// for of

// ["", "", ""]
// [{}, {}, {}]

// const arr = [1, 2, 3, 4, 5, 6, 7];

// for (const num of arr) {
//   console.log(num);
// }

// const greetings = "hello world";

// for (const greet of greetings) {
//   if (greet == " ") {
//     continue;
//   }
//   console.log(greet);
// }

const map = new Map();

map.set("PAK", "Pakistan");
map.set("UAE", "United Arab Emirates");
map.set("UK", "United Kingdom");

// console.log(typeof map);
// console.log(map);

// for (const [key, value] of map) {
//   console.log(`${key}:- ${value}`);
// }

const myobj = {
  game1: "GTA",
  game2: "NFS",
  game3: "COD",
};

// myobj is not iterable

for (const [key, value] of myobj) {
  console.log(`${key}:- ${value}`);
}
