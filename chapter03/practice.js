// Practice exercise 3.2
// Create an empty array to use as a shopping list.
// Add Milk, Bread, and Apples to your list.
// Update "Bread" with Bananas and Eggs.
// Remove the last item from the array and output it into the console.
// Sort the list alphabetically.
// Find and output the index value of Milk.
// After Bananas, add Carrots and Lettuce.
// Create a new list containing Juice and Pop.
// Combine both lists, adding the new list twice to the end of the first list.
// Get the last index value of Pop and output it to the console.
// Your final list should look like this:
// ["Bananas", "Carrots", "Lettuce", "Eggs", "Milk", "Juice", "Pop", "Juice", "Pop"]

let shoppingList = [];
shoppingList.push("Milk", "Bread", "Apples");
shoppingList.splice(1, 1, "Bananas", "Eggs");
let removeLast = shoppingList.pop();
console.log(removeLast);
shoppingList.sort();
console.log(shoppingList.indexOf("Milk"));
shoppingList.splice(1, 0, "Carrots", "Lettuce");
let shoppingList2 = ["Juice", "Pop"];
let finalShoppingList = shoppingList.concat(shoppingList2, shoppingList2);
console.log(finalShoppingList.lastIndexOf("Pop"));
console.log(finalShoppingList);
