// // CONST & LET

// //can not assign to const - use const eveywhere unless u wanna reassign or change var value
// const num = 1;

// //can assign again to let
// let name = "jhon";

// name = "jack";

// // ARROW FUNCTIONS

// // const sayHello = () => {
// //   console.log("hello");
// // };

// // const sayHello = name => {
// //   //console.log("hello" + name)
// //   console.log(`hello ${name}`);
// // };
// // sayHello("nisar");

// // FOREACH

// const fruits = ["apples", "bananas", "mangos"];
// // fruits.forEach(fruit => {
// //   console.log(fruit);
// // });

// // fruits.forEach(function() {
// //   console.log(fruit);
// // });

// // MAP - use to manipulate array - lists

// const singleFruits = fruits.map(fruit => fruit.slice(0, -1).toUpperCase());

// // console.log(singleFruits);

// // FILTER - use to filter and create a new array

// const person = [
//   { id: 1, name: "karen" },
//   { id: 2, name: "jhon" },
//   { id: 3, name: "bob" }
// ];

// // const person2 = person.filter(person => person.id !== 2);
// // console.log(person2);

// // SPREAD - use to copy and put the values of an array into another arr - use ... as spread op
// //concatenates 5 to the copied arr
// const arr = [2, 3, 4];
// const arr2 = [...arr, 5];
// console.log(arr2);

// DESTRUCTURING - use to take out items from obj or arr

const person = {
  name: "jhon",
  age: 21,
  address: {
    street: "main 42",
    city: "mumbai"
  },
  hobbies: ["movies", "music"]
};

const { name, age } = person;
const { street, city } = person.address;
console.log(name, age);
console.log(street, city);

// CLASSES

// SUBCLASSES

// MODULES
