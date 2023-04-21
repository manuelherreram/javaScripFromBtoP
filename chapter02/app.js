let str1 = "Laurence";
let str2 = "Svekis";
let val1 = undefined;
let val2 = null;
let myNum = 1000;

console.log(typeof str1);
console.log(typeof str2);
console.log(typeof val1);
console.log(typeof val2);
console.log(typeof myNum);

let myName = "Manuel";
let age = 38;
let canCode = true;

console.log(
  "My name is " +
    myName +
    ". " +
    "I am " +
    age +
    " years old. " +
    "I can code in Javascript: " +
    canCode
);

let nr11 = 144;
let nr22= 3;
let result1 = nr11 ** nr22;
console.log(result1);

let a = 2;
let b = 4;
let hypotenuse = ((a**2) + (b**2))**0.5;

console.log(hypotenuse);

function hypotenuse2 (a, b){
  let calculo = ((a**2) + (b**2))**0.5
  return calculo
}

console.log(hypotenuse2(2,4)) 