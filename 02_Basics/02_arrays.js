const marvel_heros = ["Ironman", "spiderman", "thor"];
const dc_heros = ["Batman", "Superman", "flash"];

// marvel_heros.push(dc_heros);
// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

const all_heros = marvel_heros.concat(dc_heros);
// console.log(all_heros);

// const all_new_heros = [...marvel_heros, ...dc_heros];
// console.log(all_new_heros);

const array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const array2 = [...array1];
console.log(array2);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];
// console.log(another_array[5][2][0]); // 4

const real_another_array = another_array.flat(Infinity);
// console.log(real_another_array);

// console.log(Array.isArray([2, 3, 4]));
// console.log(Array.isArray("daniyal"));
// console.log(Array.from("daniyal"));
// console.log(Array.from("daniyal").length);
// console.log(Array.from({ name: "daniyal" })); // interesting

let score1 = 100;
let score2 = 200;
let score3 = 300;
// console.log(Array.of(score1, score2, score3));
