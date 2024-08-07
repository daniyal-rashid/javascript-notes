const user = {};

user.name = "daniyal";
user.id = 1324;
user.isLoggedIn = true;

// console.log(user);

const regularUser = {
  email: "someone@gmail.com",
  fullName: {
    username: {
      firstName: "Muhammad",
      lastName: "Daniyal",
    },
  },
};

// console.log(regularUser.fullName.username.lastName)

const userOne = {
  id: 1,
  name: "Ali",
};
const userTwo = {
  idNo: 2,
  username: "Ahmed",
};
const userThree = {
  identity: 3,
  fullName: "Daniyal",
};

// for expected output keys should be different in all objects

// const finalObj = {userOne, userTwo, userThree}
const finalObj = Object.assign({}, userOne, userTwo, userThree)  
// const finalObj = { ...userOne, ...userTwo, ...userThree };
// console.log(finalObj);

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 4: "b" };
const obj4 = { 5: "a", 6: "b" };

// const obj3 = { obj1, obj2 }
const obj3 = Object.assign({}, obj1, obj2, obj4);

// const obj3 = {...obj1, ...obj2, ...obj4}
// console.log(obj3);

const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 2,
        email: "y@gmail.com"
    },
    {
        id: 2,
        email: "n@gmail.com"
    },
]

console.log(users[1].email);

// console.log(Object.keys(user));
// console.log(Object.values(user));
// console.log(Object.entries(user));
console.log(user.hasOwnProperty("location")); //false
console.log(user.hasOwnProperty("name")); //true

const course = {
    courseName : "Web Development",
    price: 999,
    courseInstructor: "Muhammad Daniyal"
}

// console.log(course.courseInstructor);

const {courseInstructor: instructor} = course
// console.log(courseInstructor);
// console.log(instructor);

// JSON
// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

// [
//     {},
//     {},
//     {}
// ]