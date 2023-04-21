// Manipulating an array
// Take the following array:

const theList = [
  "Laurence",
  "Svekis",
  true,
  35,
  null,
  undefined,
  { test: "one", score: 55 },
  ["one", "two"],
];
// Manipulate your array using various methods, such as pop(), push(), shift(), and unshift(), and transform it into the following:

["FIRST", "Svekis", "MIDDLE", "hello World", "LAST"];

// You can take the following steps, or adopt your own approach:

// Remove the first item and the last item.
theList.splice(0, 1);
theList.pop();
console.log(theList);
// Add FIRST to the start of the array.
theList[0] = "FIRST";
console.log(theList);
// Assign hello World to the fourth item value.
theList[3] = "Hello World";
console.log(theList);
// Assign MIDDLE to the third index value.
theList[2] = "MIDDLE";
console.log(theList);
// Add LAST to the last position in the array.
theList.splice(5, 1, "LAST");
// Output it to the console.
console.log(theList);

// Company product catalog

// In this project, you will implement a data structure for a product catalog and create queries to retrieve data.
// Create an array to hold an inventory of store items.
// Create three items, each having the properties of name, model, cost, and quantity.
// Add all three objects to the main array using an array method, and then log the inventory array to the console.
// Access the quantity element of your third item, and log it to the console. Experiment by adding and accessing more elements within your data structure.

const inventory = [];
const item1 = {
  name: "smartphone",
  model: "iPhone 13",
  cost: 678000,
  quantity: 290,
};
const item2 = {
  name: "smartphone",
  model: "iPhone 14",
  cost: 978000,
  quantity: 180,
};
const item3 = {
  name: "smartphone",
  model: "iPhone 11",
  cost: 458000,
  quantity: 134,
};
inventory.push(item1, item2, item3);
console.log(inventory);
console.log(inventory[2].quantity);
