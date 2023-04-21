let dog = {
  dogName: "JavaScript",
  weight: 2.4,
  color: "brown",
  breed: "chihuahua",
  age: 3,
  burglarBiter: true,
};

let dogColor1 = dog["color"];
let dogColor2 = dog.color;
console.log(dogColor1);
console.log(dogColor2);

dog["color"] = "blue";
dog.weight = 2.3;
console.log(dog);

let variable = "age";
console.log(dog[variable]);

variable = "breed";
console.log(dog[variable]);

dog[variable] = "Boxer";
console.log(dog["breed"]);

// Practice exercise 3.4
// Create a new myCar object for a car. Add some properties, including, but not limited to, make and model, and values for a typical car or your car. Feel free to use booleans, strings, or numbers.
// Create a variable that can hold the string value color. This variable containing a string value color can now be used to reference the property name within myCar. Then, use the variable within the square bracket notation to assign a new value to the color property in myCar.
// Use that same variable and assign a new property string value to it, such as forSale. Use the bracket notation once again to assign a new value to the forSale property to indicate whether the car is available for purchase.
// Output make and model into the console.
// Output the value of forSale into the console.

let myCar = {
  make: "Volkswagen",
  model: "Gol",
  color: "white",
  year: 2016,
  airbags: 2,
  airConditioning: true,
  forSale: true,
};
console.table(myCar);

myCar["color"] = "black";
console.table(myCar);

myCar["forSale"] = false;
console.log(myCar);

console.log(myCar.make);
console.log(myCar.model);
console.log(myCar.forSale);
