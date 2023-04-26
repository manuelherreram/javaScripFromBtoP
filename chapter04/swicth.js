// // If example
// let activity = "Movies";
// if (activity === "Get up") {
//   console.log("It is 6:30 am");
// } else if (activity === "Breakfast") {
//   console.log("It's 7:00 am");
// } else if (activity === "Drive to work") {
//   console.log("It's 8:00 am");
// } else if (activity === "Lunch") {
//   console.log("It's 12:00 pm");
// } else if (activity === "Drive home") {
//   console.log("It's 5:00 pm");
// } else if (activity === "Dinner") {
//   console.log("It's 6:30 pm");
// } else {
//   console.log("I can't determine the current time");
// }
// console.log(activity);

// //Switch example

// switch (activity) {
//   case "Get up":
//     console.log("It is 6:30 am");
//     break;
//   case "Breakfast":
//     console.log("It is 7:00 am");
//     break;
//   case "Drive to work":
//     console.log("It is 8:00 am");
//     break;
//   case "Lunch":
//     console.log("It is 12:00 pm");
//     break;
//   case "Drive home":
//     console.log("It is 5:00 pm");
//     break;
//   case "Dinner":
//     console.log("It is 6:30 pm");
//     break;

//   default:
//     console.log("I can't determine the current time");
//     break;
// }

// // Practice: Magic 8-Ball Random answer generator

// // Generate a random number between 0 and 5 (inclusive)
// const randomNumber = Math.floor(Math.random() * 6);

// // Prompt the user for a question
// const userQuestion = prompt("Please enter your question:");

// // Initialize an empty variable to hold the Magic 8-Ball response
// let magic8BallResponse;

// // Use a switch statement to assign a response based on the random number
// switch (randomNumber) {
//   case 0:
//     magic8BallResponse = "It is certain.";
//     break;
//   case 1:
//     magic8BallResponse = "It is decidedly so.";
//     break;
//   case 2:
//     magic8BallResponse = "Reply hazy, try again.";
//     break;
//   case 3:
//     magic8BallResponse = "Cannot predict now.";
//     break;
//   case 4:
//     magic8BallResponse = "Don't count on it.";
//     break;
//   case 5:
//     magic8BallResponse = "My sources say no.";
//     break;
//   default:
//     magic8BallResponse = "Something went wrong.";
// }

// // Output the user's question and the randomly selected response
// console.log(`User's question: ${userQuestion}`);
// console.log(`Magic 8-Ball's response: ${magic8BallResponse}`);

// Combining cases
// let grade = "A";
// switch (grade) {
//   case "F":
//   case "D":
//     console.log("You've failed");

//     break;
//   case "C":
//   case "B":
//     console.log("You've passed");
//     break;
//   case "A":
//     console.log("Excellent!");
//     break;
//   default:
//     console.log("Something went wrong");
//     break;
// }

// Practice 4.5
let prize = prompt("Choose a number from 0 to 10");
prize = Number(prize);
let selection = "My selection: ";
switch (prize) {
  case 0:
  case 1:
  case 2:
    console.log("Bronze medal");
    break;
  case 3:
  case 4:
  case 5:
    console.log("Silver medal");
    break;
  case 6:
  case 7:
  case 8:
    console.log("Gold medal");
    break;
  case 9:
    console.log("Platinum");
    break;
  default:
    console.log("Don't have a prize");
    break;
}
console.log(selection + prize);
