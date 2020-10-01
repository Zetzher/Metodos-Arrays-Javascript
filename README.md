# Metodos-Arrays-Javascript

Every iteration has to be made with ES5 and ES6 functions :3


## Iteration 1

### Given an array of cities, return an array with the first letter of each city’s name capitalized. You can use ES5 or ES6 syntax, whichever you feel more comfortable with at this point.

```let cities = ["miami", "barcelona", "madrid", "amsterdam", "berlin", "sao paulo", "lisbon", "mexico city", "paris"];```







## Iteration 2

#### Imagine you are a Math teacher and you have to grade our students based on their performance on two projects (40% of final grade) and their final exam (60% of final grade).

#### So the whole class is represented as an array of objects (each object contains the data about that student), and we need to get a new array of objects, but this time the objects will contain only student´s name, and their final grade. Let´s do it.



```const students = [ 
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
      finalExam: 65<br>
    }<br>
]<br>```



## Iteration 3

### Given a menu of foods and their calories, calculate the average number of calories for the entire list.

`const menu = [<br>
    { name: "Carrots", calories: 150 },<br>
    { name: "Steak", calories: 350 },<br>
    { name: "Broccoli", calories: 120 },<br>
    { name: "Chicken", calories: 250 },<br>
    { name: "Pizza", calories: 520 }<br>
  ];<br>`




## Iteration 4

### We are developing our super e-commerce website; each product has some user comments and rating stored in an array called “Reviews”. Each review is an object, so we have the following structure:

`const product = {<br>
  name: "AmazonBasics Apple Certified Lightning to USB Cable",<br>
  price: 7.99,<br>
  manufacter: "Amazon",<br>
  reviews:<br>
  [<br>
    {  user: "Pavel Nedved",<br>
      comments: "It was really usefull, strongly recommended",<br>
      rate: 4<br>
    },<br>
    {  user: "Alvaro Trezeguet",<br>
      comments: "It lasted 2 days",<br>
      rate: 1<br>
    },<br>
    {  user: "David Recoba",<br>
      comments: "Awesome",<br>
      rate: 5<br>
    },<br>
    {  user: "Jose Romero",<br>
      comments: "Good value for money",<br>
      rate: 4<br>
    },<br>
    {  user: "Antonio Cano",<br>
      comments: "It broked really fast",<br>
      rate: 2<br>
    },<br>
  ]<br>
}<br>`

##### Hint: We have to show the product on our website, but we do not want to show all the reviews in a first view, we only need the average rate so that other customers can see in a fast way every product rate.



## Iteration 5


### Given the following array, filter the ones who are eligible to go to bars in the USA.

`var people = [<br>
    { name: "Candice", age: 25 },<br>
    { name: "Tammy", age: 30 },<br>
    { name: "Allen", age: 20 },<br>
    { name: "Nettie", age: 21 },<br>
    { name: "Stuart", age: 17 },<br>
    { name: "Bill", age: 19 }<br>
  ];<br>`



## Iteration 6

#### We are working for Airbnb as developers, and we need to add a filter feature when someone is looking for a home. Imagine somebody starts their search for places in Barcelona, so we bring all the rooms available there.

#### But it´s summer, and the customers who are searching for rooms want the place to have a pool. Our incredible platform will include a filter feature, so we have to work on it.

#### Giving the following arrays of objects, let’s filter just the one with a pool.

`const places = [<br>
    {<br>
     title: "Awesome Suite 20' away from la Rambla",<br>
     price: 200,<br>
     type: "Private Room",<br>
     pool: true,<br>
     garage: false<br>
    },<br>
    {<br>
     title: "Private apartment",<br>
     price: 190,<br>
     type: "Entire Place",<br>
     pool: true,<br>
     garage: true<br>
    },<br>
    {<br>
     title: "Apartment with awesome views",<br>
     price: 400,<br>
     type: "Entire Place",<br>
     pool: false,<br>
     garage: false<br>
    },<br>
    {<br>
     title: "Apartment in la Rambla",<br>
     price: 150,<br>
     type: "Private Room",<br>
     pool: false,<br>
     garage: true<br>
    },<br>
    {<br>
     title: "Comfortable place in Barcelona´s center",<br>
     price: 390,<br>
     type: "Entire place",<br>
     pool: true,<br>
     garage: true<br>
    },<br>
    {<br>
     title: "Room near Sagrada Familia",<br>
     price: 170,<br>
     type: "Private Room",<br>
     pool: false,<br>
     garage: false<br>
    },<br>
    {<br>
     title: "Great house next to Camp Nou",<br>
     price: 140,<br>
     type: "Entire place",<br>
     pool: true,<br>
     garage: true<br>
    },
    {
     title: "New apartment with 2 beds",<br>
     price: 2000,<br>
     type: "Entire place",<br>
     pool: false,<br>
     garage: true<br>
    },<br>
    {<br>
     title: "Awesome Suite",<br>
     price: 230,<br>
     type: "Private Room",<br>
     pool: false,<br>
     garage: false<br>
    },<br>
    {<br>
     title: "Apartment 10' from la Rambla",<br>
     price: 930,<br>
     type: "Entire place",<br>
     pool: true,<br>
     garage: true<br>
    }<br>
   ]<br>`



## Iteration 7

### Given an array of numbers, filter out the ones that are not even, and are greater than 42.

`const numbers = [1, 60, 112, 123, 100, 99, 73, 45];`

