//Normal function
function doingStuff1(x) {
  console.log(x);
}

// Arrow function
let doingStuff = (x) => console.log(x);

doingStuff1("Great");
doingStuff("Great");

// two arguments
let addTwoNumbers = (x, y) => console.log(x + y);
addTwoNumbers(10, 23);

// No arguments
let sayHi = () => console.log("Hi!");
sayHi();

// For each
const arr = ["squirrel", "alpaca", "buddy"];
arr.forEach((element) => console.log(element));
