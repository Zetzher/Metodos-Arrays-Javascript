# Metodos-Arrays-Javascript

Every iteration has to be made with ES5 and ES6 functions :3


## Iteration 1

### Given an array of cities, return an array with the first letter of each city’s name capitalized. You can use ES5 or ES6 syntax, whichever you feel more comfortable with at this point.

let cities = ["miami", "barcelona", "madrid", "amsterdam", "berlin", "sao paulo", "lisbon", "mexico city", "paris"];







## Iteration 2

#### Imagine you are a Math teacher and you have to grade our students based on their performance on two projects (40% of final grade) and their final exam (60% of final grade).

#### So the whole class is represented as an array of objects (each object contains the data about that student), and we need to get a new array of objects, but this time the objects will contain only student´s name, and their final grade. Let´s do it.



const students = [ <br>
    {<br>
      name: "Tony Parker",<br>
      firstProject: 80,<br>
      secondProject: 75,<br>
      finalExam: 90<br>
    },<br>
    {<br>
      name: "Marc Barchini",<br>
      firstProject: 84,<br>
      secondProject: 65,<br>
      finalExam: 65<br>
    },<br>
    {<br>
      name: "Claudia Lopez",<br>
      firstProject: 45,<br>
      secondProject: 95,<br>
      finalExam: 99<br>
    },<br>
    {<br>
      name: "Alvaro Briattore",<br>
      firstProject: 82,<br>
      secondProject: 92,<br>
      finalExam: 70<br>
    },<br>
    {<br>
      name: "Isabel Ortega",<br>
      firstProject: 90,<br>
      secondProject: 32,<br>
      finalExam: 85<br>
    },<br>
    {<br>
      name: "Francisco Martinez",<br>
      firstProject: 90,<br>
      secondProject: 55,<br>
      finalExam: 78<br>
    },<br>
    {<br>
      name: "Jorge Carrillo",<br>
      firstProject: 83,<br>
      secondProject: 77,<br>
      finalExam: 90<br>
    },<br>
    {<br>
      name: "Miguel López",<br>
      firstProject: 80,<br>
      secondProject: 75,<br>
      finalExam: 75<br>
    },<br>
    {v
      name: "Carolina Perez",<br>
      firstProject: 85,<br>
      secondProject: 72,<br>
      finalExam: 67<br>
    },<br>
    {<br>
      name: "Ruben Pardo",<br>
      firstProject: 89,<br>
      secondProject: 72,<br>
      finalExam: 65v
    }<br>
]<br>



## Iteration 3

### Given a menu of foods and their calories, calculate the average number of calories for the entire list.

const menu = [
    { name: "Carrots", calories: 150 },
    { name: "Steak", calories: 350 },
    { name: "Broccoli", calories: 120 },
    { name: "Chicken", calories: 250 },
    { name: "Pizza", calories: 520 }
  ];




## Iteration 4

### We are developing our super e-commerce website; each product has some user comments and rating stored in an array called “Reviews”. Each review is an object, so we have the following structure:

const product = {
  name: "AmazonBasics Apple Certified Lightning to USB Cable",
  price: 7.99,
  manufacter: "Amazon",
  reviews:
  [
    {  user: "Pavel Nedved",
      comments: "It was really usefull, strongly recommended",
      rate: 4
    },
    {  user: "Alvaro Trezeguet",
      comments: "It lasted 2 days",
      rate: 1
    },
    {  user: "David Recoba",
      comments: "Awesome",
      rate: 5
    },
    {  user: "Jose Romero",
      comments: "Good value for money",
      rate: 4
    },
    {  user: "Antonio Cano",
      comments: "It broked really fast",
      rate: 2
    },
  ]
}

##### Hint: We have to show the product on our website, but we do not want to show all the reviews in a first view, we only need the average rate so that other customers can see in a fast way every product rate.



## Iteration 5


### Given the following array, filter the ones who are eligible to go to bars in the USA.

var people = [
    { name: "Candice", age: 25 },
    { name: "Tammy", age: 30 },
    { name: "Allen", age: 20 },
    { name: "Nettie", age: 21 },
    { name: "Stuart", age: 17 },
    { name: "Bill", age: 19 }
  ];



## Iteration 6

#### We are working for Airbnb as developers, and we need to add a filter feature when someone is looking for a home. Imagine somebody starts their search for places in Barcelona, so we bring all the rooms available there.

#### But it´s summer, and the customers who are searching for rooms want the place to have a pool. Our incredible platform will include a filter feature, so we have to work on it.

#### Giving the following arrays of objects, let’s filter just the one with a pool.

const places = [
    {
     title: "Awesome Suite 20' away from la Rambla",
     price: 200,
     type: "Private Room",
     pool: true,
     garage: false
    },
    {
     title: "Private apartment",
     price: 190,
     type: "Entire Place",
     pool: true,
     garage: true
    },
    {
     title: "Apartment with awesome views",
     price: 400,
     type: "Entire Place",
     pool: false,
     garage: false
    },
    {
     title: "Apartment in la Rambla",
     price: 150,
     type: "Private Room",
     pool: false,
     garage: true
    },
    {
     title: "Comfortable place in Barcelona´s center",
     price: 390,
     type: "Entire place",
     pool: true,
     garage: true
    },
    {
     title: "Room near Sagrada Familia",
     price: 170,
     type: "Private Room",
     pool: false,
     garage: false
    },
    {
     title: "Great house next to Camp Nou",
     price: 140,
     type: "Entire place",
     pool: true,
     garage: true
    },
    {
     title: "New apartment with 2 beds",
     price: 2000,
     type: "Entire place",
     pool: false,
     garage: true
    },
    {
     title: "Awesome Suite",
     price: 230,
     type: "Private Room",
     pool: false,
     garage: false
    },
    {
     title: "Apartment 10' from la Rambla",
     price: 930,
     type: "Entire place",
     pool: true,
     garage: true
    }
   ]



## Iteration 7

### Given an array of numbers, filter out the ones that are not even, and are greater than 42.

const numbers = [1, 60, 112, 123, 100, 99, 73, 45];

