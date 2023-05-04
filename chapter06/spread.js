// example
let spread = ["so", "much", "fun"];
let message = ["JavaScript", "is", ...spread, "and", "very", "powerful"];
console.log(message);

// in a function
function addTwoNumbers(x, y) {
  console.log(x + y);
}
let arr = [5, 8];
addTwoNumbers(...arr);

function addFourNumbers(x, y, z, a) {
  console.log(x + y + z + a);
}
let arr1 = [3, 5];
let arr2 = [4, 9];
addFourNumbers(...arr1, ...arr2);
