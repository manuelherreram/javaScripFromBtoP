// Objects in objects
let company = {
  companyName: "Healthy Candy",
  activity: "food manufacturing",
  address: {
    street: "2nd street",
    number: "123",
    zipcode: "33116",
    city: "Miami",
    state: "Florida",
  },
  yearOfEstablishment: 2021,
};

company.address.zipcode = "334567";
company["address"]["street"] = "3rd street";
console.log(company.address.zipcode);
console.log(company["address"]["street"]);

// Arrays in objects
let company2 = {
  companyName: "Healthy Candy",
  activities: [
    "food manufacturing",
    "improving kids' health",
    "manufacturing toys",
  ],
  address: {
    street: "2nd street",
    number: "123",
    zipcode: "33116",
    city: "Miami",
    state: "Florida",
  },
  yearOfEstablishment: 2021,
};

let activity = company2.activities[1];
console.log(activity);

// objects in arrays
let addresses = [
  {
    street: "2nd street",
    number: "123",
    zipcode: "33116",
    city: "Miami",
    state: "Florida",
  },
  {
    street: "1st West avenue",
    number: "5",
    zipcode: "75001",
    city: "Addison",
    state: "Texas",
  },
];

let street = addresses[0].street;
console.log(street);

// objects in arrays in objects

let company3 = {
  companyName: "Healthy Candy",
  activities: [
    "food manufacturing",
    "improving kids' health",
    "manufacturing toys",
  ],
  address: [
    {
      street: "2nd street",
      number: "123",
      zipcode: "33116",
      city: "Miami",
      state: "Florida",
    },
    {
      street: "1st West avenue",
      number: "5",
      zipcode: "75001",
      city: "Addison",
      state: "Texas",
    },
  ],
  yearOfEstablishment: 2021,
};

let streetName = company3.address[1].street;
console.log(streetName);

// Practice exercise 3.5
// Create an object named people that contains an empty array that is called friends.
// Create three variables, each containing an object, that contain one of your friend's first names, last names, and an ID value.
// Add the three friends to the friend array.
// Output it to the console.

let people = {
  friends: [],
};

let firstFriend = {
  firstName: "Manuel",
  lastName: "Herrera",
  id: 159445767,
};
let secondFriend = {
  firstName: "Hector",
  lastName: "Herrera",
  id: 159476507,
};
let thirdFriend = {
  firstName: "Francisca",
  lastName: "Herrera",
  id: 159445097,
};

people.friends.push(firstFriend, secondFriend, thirdFriend);
console.log(people);
