//Practice 6.1

function addNumbers(a, b) {
  return a + b;
}
let val1 = 11;
let val2 = 22;
console.log(addNumbers(val1, val2));
console.log(addNumbers(20, 30));

// Practice 6.2

let desWords = ["Maravilloso", "Increible", "Fortachon", "Poderoso"];
function askName() {
  let ask = prompt("What is your name? ");
  let random = Math.floor(Math.random() * desWords.length);
  console.log(desWords[random] + " " + ask);
}

askName();
