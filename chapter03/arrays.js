//Accessing and Overwriting

cars = ["Toyota", "Renault", "Volkswagen"];
console.log(cars[0]);
console.log(cars[1]);
console.log(cars[2]);
console.log(cars[3]);
console.log(cars[-1]);

cars[0] = "Tesla";
console.log(cars[0]);

console.log(cars);

cars[3] = "Kia";
cars[-1] = "Fiat";
console.log(cars[3]);
console.log(cars[-1]);

// length
colors = ["black", "orange", "pink"];
booleans = [true, false, false, true];
emptyArray = [];
console.log("Length of colors:", colors.length);
console.log("Length of booleans:", booleans.length);
console.log("Length of empty array:", emptyArray.length);

lastElementOfColors = colors[colors.length - 1];
console.log(lastElementOfColors);

numbers = [12, 24, 36];
numbers[5] = 48;
console.log(numbers.length);
console.log("numbers", numbers);

// Practice exercise 3.1
// Create an array to use as your shopping list with 3 items: "Milk," "Bread," and "Apples."
// Check your list length in the console.
// Update "Bread" to "Bananas."
// Output your entire list to the console.

shoppingList = ["Milk", "Bread", "Apples"];
console.log(shoppingList.length);
shoppingList[1] = "Bananas";
console.log(shoppingList);
