/* 1. Evaluating a number game:
Ask the user to enter a number and check whether it's greater than, equal to, or less than a dynamic number value in your code. Output the result to the user.*/

let userInput = prompt("Please enter a number");
userInput = Number(userInput);
const myNumber = 23;
if (userInput > myNumber) {
  console.log("Your number is greater than mine");
} else if (userInput === myNumber) {
  console.log("We have the same number");
} else {
  console.log("Your number is less than mine");
}

/* 2. Friend checker game:
Ask the user to enter a name, using the switch statement to return a confirmation that the user is a friend if the name selected is known in the case statements. You can add a default response that you don't know the person if it's an unknown name. Output the result into the console.*/
let person = prompt("Enter name: ");
let message;
switch (person) {
  case "Matias":
  case "Cesar":
  case "Ely":
  case "Roberto":
  case "Consu":
    message = person + " is my friend";
    break;

  default:
    message = "I don't know " + person;
    break;
}
console.log(message);
