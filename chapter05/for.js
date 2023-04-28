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

const myTable = [];
const row = 4;
const column = 7;
let counter = 0;
for (let i = 0; i < row; i++) {
  let tempTable = [];

  for (let j = 0; j < column; j++) {
    counter++;
    tempTable.push(counter);
  }
  myTable.push(tempTable);
}
console.table(myTable);

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
