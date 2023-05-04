function addTwoNumbers(x, y) {
  return x + y;
}

let result = addTwoNumbers(48, 5);
console.log(result);

let resultArr = [];
for (let i = 0; i < 10; i++) {
  let result = addTwoNumbers(i, 2 * i);
  resultArr.push(result);
}
console.log(resultArr);
