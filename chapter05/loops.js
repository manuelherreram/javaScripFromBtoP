// while loop
let i = 0;
while (i < 10) {
  console.log(i);
  i++;
}

// Find
let someArray = ["Mike", "Antal", "Marc", "Emir", "Louiza", "Jacky"];
let notFound = true;
while (notFound && someArray.length > 0) {
  if (someArray[0] === "Louiza") {
    console.log("Found her!");
    notFound = false;
  } else {
    someArray.shift();
  }
}
console.log(notFound);

// Fibonacci
let nr1 = 0;
let nr2 = 1;
let temp;
fibonacciArray = [];
while (fibonacciArray.length < 25) {
  fibonacciArray.push(nr1);
  temp = nr1 + nr2;
  nr1 = nr2;
  nr2 = temp;
}
console.log(fibonacciArray);

/* Practice exercise 5.1
In this exercise we will create a number guessing game that takes user input and replies based on how accurate the user's guess was.

Create a variable to be used as the max value for the number guessing game.
Generate a random number for the solution using Math.random() and Math.floor(). You will also need to add 1 so that the value is returned as 1-[whatever the set max value is]. You can log this value to the console for development to see the value as you create the game, then when the game is complete you can comment out this console output.
Create a variable that will be used for tracking whether the answer is correct or not and set it to a default Boolean value of false. We can update it to be true if the user guess is a match.
Use a while loop to iterate a prompt that asks the user to enter a number between 1 and 5, and convert the response into a number in order to match the data type of the random number.
Inside the while loop, check using a condition to see if the prompt value is equal to the solution number. Apply logic such that if the number is correct, you set the status to true and break out of the loop. Provide the player with some feedback as to whether the guess was high or low, and initiate another prompt until the user guesses correctly. In this way we use the loop to keep asking until the solution is correct, and at that point we can stop the iteration of the block of code.*/
const max = 5;
const ranNumber = Math.floor(Math.random() * max) + 1;
let correct = false;
while (!correct) {
  let guess = prompt("Guess a Number 1 - " + max);
  guess = Number(guess);
  if (guess === ranNumber) {
    correct = true;
    console.log("You got it " + ranNumber);
  } else if (guess > ranNumber) {
    console.log("Too high!");
  } else {
    console.log("Too low!");
  }
}
