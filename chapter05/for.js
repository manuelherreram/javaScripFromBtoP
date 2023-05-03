for (let i = 0; i < 10; i++) {
  console.log(i);
}

// for and arrays

// let arr = [];
// for (let i = 0; i < 100; i++) {
//   arr.push(i);
// }
// console.log(arr);

// // Practice 5.3

const myWork = [];
for (let i = 1; i <= 10; i++) {
  const temp = { name: `Lesson ${i}`, status: i % 2 === 0 ? true : false };
  myWork.push(temp);
}
console.log(myWork);

// nested for . array of arrays

let arrayOfArrays = [];
for (let i = 0; i < 3; i++) {
  arrayOfArrays.push([]);
  for (let j = 0; j < 7; j++) {
    arrayOfArrays[i].push(j);
  }
}
console.table(arrayOfArrays);

//Practice 5.4

// const myTable = [];
// const row = 4;
// const column = 7;
// let counter = 0;
// for (let i = 0; i < row; i++) {
//   let tempTable = [];

//   for (let j = 0; j < column; j++) {
//     counter++;
//     tempTable.push(counter);
//   }
//   myTable.push(tempTable);
// }
// console.table(myTable);

// for arrays
let names = ["Manuel", "Daniela", "Olivia", "Rayen", "Emilia"];
for (let i = 0; i < names.length; i++) {
  if (names[i].startsWith("M")) {
    delete names[i];
    continue;
  }
  //console.log(names[i]);
  names[i] = "Hello " + names[i];
}
console.log(names);

// Practice 5.5
const grid = [];
const cells = 64;
let counter = 0;
let row;
for (let x = 0; x < cells + 1; x++) {
  if (counter % 8 == 0) {
    if (row != undefined) {
      grid.push(row);
    }
    row = [];
  }
  counter++;
  let temp = counter;
  row.push(temp);
}
console.table(grid);

// for of
let names2 = ["Manuel", "Daniela", "Olivia", "Rayen", "Emilia"];
for (let name of names2) {
  console.log(name);
}

let arr = [];
for (let i = 0; i < 10; i++) {
  arr.push(i + 1);
}
console.log(arr);

for (let j = 0; j < arr.length; j++) {
  console.log(arr[j]);
}
for (let val of arr) {
  console.log(val);
}

// for in

let car = {
  model: "Golf",
  make: "VW",
  year: 1999,
  color: "black",
};

for (let prop in car) {
  //console.log(car[prop]);
  console.log(prop);
}
