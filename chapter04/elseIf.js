// let age = 10;
// let cost = 0;
// let message;
// if (age < 3) {
//   cost = 0;
//   message = "Access is gree under three.";
// } else if (age >= 3 && age < 12) {
//   cost = 5;
//   message = "With the child discount, the fee is 5 dollars.";
// } else if (age >= 12 && age < 65) {
//   cost = 10;
//   message = "A regular ticket costs 10 dollars";
// } else {
//   cost = 7;
//   message = "A ticket is 7 dollars";
// }
// console.log(message);
// console.log("Your total cost " + cost);

// Practice

// let age = prompt("How old are you?");
// age = Number(age);
// let message;
// if (age >= 21) {
//   message = "You can enter and drink.";
// } else if (age >= 19) {
//   message = "You can enter but not drink.";
// } else {
//   message = "You are not allowed in!";
// }
// console.log(message);
// ternary
let age = 21;
let access = age < 18 ? "denied" : "allowed";
console.log(access);

// practice
let id = true;
let drive = id === true ? "You can drive" : "You are not allowed to drive";
console.log(drive);
