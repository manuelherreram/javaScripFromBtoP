// Miles to KM
// “The distance of 130 kms is equal to 209.2142 miles
// “For reference, 1 mile equals 1.60934 kilometers.”

let miles = 130;
let kilometers = miles * 1.60934;

console.log(
  "The distance of " + miles + " kms is equal to " + kilometers + " miles"
);

// BMI Calculator
// “Set values for height in inches and weight in pounds, then convert the values to centimeters and kilos, outputting the results to the console:

// 1 inch is equal to 2.54 cm
// 2.2046 pounds is equal to 1 kilo
// Output the results. Then, calculate and log the BMI: this is equal to weight (in kilos) divided by squared height (in meters). Output the results to the console.”

let inches = 72;
let pounds = 180;
let weight = pounds / 2.2046; // in kilos
let height = inches * 2.54; // height in centimetres
console.log(weight, height);
let bmi = weight / (((height / 100) * height) / 100);
console.log(bmi);
