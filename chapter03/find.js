// find() find a value
arr8 = [2, 6, 7, 8];
let findValue = arr8.find(function (e) {
  return e === 6;
});
let findValue2 = arr8.find((e) => e === 2);
console.log(findValue);
console.log(findValue2);

// indexOf() find the position

arr9 = [2, 6, 7, 8];
let findIndex = arr9.indexOf(6);
let findIndex2 = arr9.indexOf(10);
let findIndex3 = arr9.indexOf(6, 2);
console.log(findIndex, findIndex2);
console.log(findIndex3);

// lastIndexOf() last occurrence

let animals = ["dog", "horse", "cat", "platypus", "dog"];
let lastDog = animals.lastIndexOf("dog");
console.log(lastDog);
