//Iteration 1

// Given an array of cities, return an array with the first letter of each city’s name capitalized. You can use ES5 or ES6 syntax, whichever you feel more comfortable with at this point.

// array of cities:
let cities = [
  "miami",
  "barcelona",
  "madrid",
  "amsterdam",
  "berlin",
  "sao paulo",
  "lisbon",
  "mexico city",
  "paris",
];

//ES5 =>

let capLetCities = cities.map(function (element) {
  return element[0].toUpperCase() + element.slice(1);
});

console.log(capLetCities);

//ES6 =>

let capLetCities = cities.map(
  (element) => element[0].toUpperCase() + element.slice(1)
);

console.log(capLetCities);

//Iteration 2

// Imagine you are a Math teacher and you have to grade our students based on their performance on two projects (40% of final grade) and their final exam (60% of final grade).
// So the whole class is represented as an array of objects (each object contains the data about that student), and we need to get a new array of objects, but this time the objects will contain only student´s name, and their final grade. Let´s do it.

const students = [
  {
    name: "Tony Parker",
    firstProject: 80,
    secondProject: 75,
    finalExam: 90,
  },
  {
    name: "Marc Barchini",
    firstProject: 84,
    secondProject: 65,
    finalExam: 65,
  },
  {
    name: "Claudia Lopez",
    firstProject: 45,
    secondProject: 95,
    finalExam: 99,
  },
  {
    name: "Alvaro Briattore",
    firstProject: 82,
    secondProject: 92,
    finalExam: 70,
  },
  {
    name: "Isabel Ortega",
    firstProject: 90,
    secondProject: 32,
    finalExam: 85,
  },
  {
    name: "Francisco Martinez",
    firstProject: 90,
    secondProject: 55,
    finalExam: 78,
  },
  {
    name: "Jorge Carrillo",
    firstProject: 83,
    secondProject: 77,
    finalExam: 90,
  },
  {
    name: "Miguel López",
    firstProject: 80,
    secondProject: 75,
    finalExam: 75,
  },
  {
    name: "Carolina Perez",
    firstProject: 85,
    secondProject: 72,
    finalExam: 67,
  },
  {
    name: "Ruben Pardo",
    firstProject: 89,
    secondProject: 72,
    finalExam: 65,
  },
];

//ES5 =>

let finalArr = students.map(function (element) {
  let object = {};
  object.name = element.name;
  let avgProject = (element.firstProject + element.secondProject) / 2;
  let avgGrade = avgProject * 0.4 + element.finalExam * 0.6;
  object.finalGrade = avgGrade;
  return object;
});

console.log(finalArr);

//ES6 =>

let finalArr = students.map((element) => {
  return {
    name: element.name,
    finalGrade:
      ((element.firstProject + element.secondProject) / 2) * 0.4 +
      element.finalExam * 0.6,
  };
});

console.log(finalArr);

//Iteration 3

// Given a menu of foods and their calories, calculate the average number of calories for the entire list.

const menu = [
  { name: "Carrots", calories: 150 },
  { name: "Steak", calories: 350 },
  { name: "Broccoli", calories: 120 },
  { name: "Chicken", calories: 250 },
  { name: "Pizza", calories: 520 },
];

//ES5 =>

let avgCal = menu.reduce(function (acc, element) {
  let updatedAcc = acc + element.calories;
  return updatedAcc;
}, 0);

console.log(avgCal / menu.length);

//ES6 =>

let avgCal =
  menu.reduce((acc, element) => acc + element.calories, 0) / menu.length;

//Iteration 4
//We are developing our super e-commerce website; each product has some user comments and rating stored in an array called “Reviews”. Each review is an object, so we have the following structure:

const product = {
  name: "AmazonBasics Apple Certified Lightning to USB Cable",
  price: 7.99,
  manufacter: "Amazon",
  reviews: [
    {
      user: "Pavel Nedved",
      comments: "It was really usefull, strongly recommended",
      rate: 4,
    },
    { user: "Alvaro Trezeguet", comments: "It lasted 2 days", rate: 1 },
    { user: "David Recoba", comments: "Awesome", rate: 5 },
    { user: "Jose Romero", comments: "Good value for money", rate: 4 },
    { user: "Antonio Cano", comments: "It broked really fast", rate: 2 },
  ],
};

// Hint: We have to show the product on our website, but we do not want to show all the reviews in a first view, we only need the average rate so that other customers can see in a fast way every product rate.
//ES5 =>

let arrReview = product.reviews.map(function (element) {
  return element.rate;
});

let sumReviews = arrReview.reduce(function (acc, element) {
  return acc + element;
}, 0);

let avgReviews = sumReviews / product.reviews.length;

product.reviews = avgReviews;

console.log(product);

//ES6 =>

product.reviews =
  product.reviews
    .map((element) => element.rate)
    .reduce((acc, element) => acc + element, 0) / product.reviews.length;

console.log(product);

//Iteration 5

// Given the following array, filter the ones who are eligible to go to bars in the USA.

var people = [
  { name: "Candice", age: 25 },
  { name: "Tammy", age: 30 },
  { name: "Allen", age: 20 },
  { name: "Nettie", age: 21 },
  { name: "Stuart", age: 17 },
  { name: "Bill", age: 19 },
];

//ES5 =>

let grownArr = people.filter(function (element) {
  if (element.age >= 21) {
    return element;
  }
});

console.log(grownArr);

//ES6 =>

let grownArr = people.filter((element) => element.age >= 21);

console.log(grownArr);

//Iteration 6

// We are working for Airbnb as developers, and we need to add a filter feature when someone is looking for a home. Imagine somebody starts their search for places in Barcelona, so we bring all the rooms available there.

// But it´s summer, and the customers who are searching for rooms want the place to have a pool. Our incredible platform will include a filter feature, so we have to work on it.

// Giving the following arrays of objects, let’s filter just the one with a pool.

const places = [
  {
    title: "Awesome Suite 20' away from la Rambla",
    price: 200,
    type: "Private Room",
    pool: true,
    garage: false,
  },
  {
    title: "Private apartment",
    price: 190,
    type: "Entire Place",
    pool: true,
    garage: true,
  },
  {
    title: "Apartment with awesome views",
    price: 400,
    type: "Entire Place",
    pool: false,
    garage: false,
  },
  {
    title: "Apartment in la Rambla",
    price: 150,
    type: "Private Room",
    pool: false,
    garage: true,
  },
  {
    title: "Comfortable place in Barcelona´s center",
    price: 390,
    type: "Entire place",
    pool: true,
    garage: true,
  },
  {
    title: "Room near Sagrada Familia",
    price: 170,
    type: "Private Room",
    pool: false,
    garage: false,
  },
  {
    title: "Great house next to Camp Nou",
    price: 140,
    type: "Entire place",
    pool: true,
    garage: true,
  },
  {
    title: "New apartment with 2 beds",
    price: 2000,
    type: "Entire place",
    pool: false,
    garage: true,
  },
  {
    title: "Awesome Suite",
    price: 230,
    type: "Private Room",
    pool: false,
    garage: false,
  },
  {
    title: "Apartment 10' from la Rambla",
    price: 930,
    type: "Entire place",
    pool: true,
    garage: true,
  },
];

//ES5 =>

//ES6 =>

let filteredArr = places.filter(
  (element) => element.type === "Private Room" && element.pool === true
);

console.log(filteredArr);

//Iteration 7

// Given an array of numbers, filter out the ones that are not even, and are greater than 42.

const numbers = [1, 60, 112, 123, 100, 99, 73, 45];

//ES5 =>

//ES6 =>

let newArr = numbers.filter((element) => element > 42 && element % 2 !== 0);

console.log(newArr);
