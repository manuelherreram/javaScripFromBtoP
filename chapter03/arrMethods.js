// push() add elements to an array
favoriteFruits = ["grapefruit", "orange", "lemon"];
favoriteFruits.push("lime");

let lenghtOfFavoriteFruits = favoriteFruits.push("tangerine");
console.log(favoriteFruits);

// splice() add elements at a certain index
let arrOfShapes = ["circle", "triangle", "rectangle", "pentagon"];
// arrOfShapes.splice(2, 0, "square", "trapezoid");
// console.log(arrOfShapes);

arrOfShapes.splice(2, 2, "square", "trapezoid");
console.log(arrOfShapes);

// concat() add another array to your array

let arr5 = [1, 2, 3];
let arr6 = [4, 5, 6];
let arr7 = arr5.concat(arr6);
console.log(arr7);
let arr8 = arr7.concat(7, 8, 9);
console.log(arr8);

// deleting with pop(), shift() and splice() delete
arr8.pop();
console.log(arr8);

arr8.shift();
console.log(arr8);

arr8.splice(1, 3);
console.log(arr8);

delete arr8[0];
console.log(arr8);
