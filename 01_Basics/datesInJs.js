// // Dates

let myDate = new Date();
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// let myCreatedDate = new Date(2023, 0, 23); // yy/mm//dd
// let myCreatedDate = new Date(2023, 0, 23, 5, 3);
// let myCreatedDate = new Date("2023-01-14");
// let myCreatedDate = new Date("01-14-2023");
// console.log(myCreatedDate.toLocaleString());

// let myTimeStamp = Date.now();

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now() / 1000));

let newDate = new Date();
// console.log(newDate);
// console.log(newDate.getMonth() + 1);
// console.log(newDate.getDay());
// console.log(newDate.getFullYear());
// console.log(newDate.getDate());
// console.log(newDate.getHours());
// console.log(newDate.getMinutes());
// console.log(newDate.getSeconds());

// `${newDate.getDay()} and the time `;

let day = newDate.toLocaleString("default", {
  weekday: "long",
  month: "long",
  day: "2-digit",
  year: "numeric",
});

let date1 = newDate.toLocaleString("default", {
  //   weekday: "narrow",
  //   second: "2-digit",
  minute: "numeric",
  hour: "numeric",
});

console.log(date1);
console.log(day);
