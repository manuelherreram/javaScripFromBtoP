let someValues1 = [1, 2, 3];
let someValues2 = [4, 5, 6];
let someValues3 = [7, 8, 9];
let arrayOfArrays = [someValues1, someValues2, someValues3];
let arrOfArrays2 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

let value1 = arrayOfArrays[0][1];
let value2 = arrayOfArrays[2][2];

arrayOfArraysOfArrays = [arrayOfArrays, arrayOfArrays, arrayOfArrays];

let middleValue = arrayOfArraysOfArrays[1][1][1];
console.log(middleValue);
console.log(value2);
console.log(arrayOfArrays);
console.log(arrOfArrays2);
console.log(arrayOfArraysOfArrays);

// Practice exercise 3.3
// Create an array containing three values: 1, 2, and 3.
// Nest the original array into a new array three times.
// Output the value 2 from one of the arrays into the console.

let newArray = [1, 2, 3];
newArrayOfArrays = [newArray, newArray, newArray];
let value3 = newArrayOfArrays[2][1];
console.log(value3);
console.log(newArrayOfArrays);
