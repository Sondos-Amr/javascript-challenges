'use strict';
// // s-1 default parmenters

// // const bookings = [];

// // function createBooking(
// //   filghNum,
// //   numPassengers = 10,
// //   price = numPassengers * 2
// // ) {
// //   // before ES6 "Default parmenters"
// //   // numPassengers = numPassengers || 7;
// //   // price = price || 200;
// //   const booking = {
// //     filghNum,
// //     numPassengers,
// //     price,
// //   };
// //   bookings.push(booking);
// //   console.log(booking);
// // }

// // createBooking('LH123');
// // createBooking('LH123', 50);
// // createBooking('LH123', undefined, 50);

// //
// // assignments on "Default Parameters"

// // ## assignments on "Default Parameters"
// // ## 🟢 **Level 1: Basics**

// // ### 1.

// // Create a function `greet` that prints
// // `"Hello, [name]"`
// // If no name is passed, it should print `"Hello, Guest"`.

// function greet(name = 'Guest') {
//   console.log(` Hello , ${name}`);
// }
// greet('Sondos');
// greet();

// // ---

// // ### 2.

// // Write a function `multiply` that multiplies two numbers.
// // If the second number is not given, use `1` as default.

// function multiplies(a, b = 1) {
//   console.log(a + b);
// }
// multiplies(2, 5);
// multiplies(2);

// // ---

// // ## 🟡 **Level 2: Practical Use**

// // ### 3.

// // Create a function `createUser` that takes 3 parameters:

// // - `username`

// // - `country` (default is `"Unknown"`)

// // - `role` (default is `"Viewer"`)

// // When called, it should print a message like:
// // `"User: Ali | Country: Egypt | Role: Admin"`

// function createUser(username, country = 'Unkown', role = 'Viewer') {
//   console.log(` User: ${username} | Country: ${country} | Role: ${role}`);
// }
// createUser('Ali', 'Egypt', 'Admin');
// // ---

// // ### 4.

// // Write a function `calculateTotal(price, tax)` where tax is `10%` by default.
// // Return the final price after tax.

// function calculateTotal(price, tax = 10) {
//   let taxDecimal = tax / 100;
//   return price + price * taxDecimal;
// }
// console.log(calculateTotal(100, 50));
// console.log(calculateTotal(100));

// // ---

// // ## 🔴 **Level 3: Advanced Thinking**

// // ### 5.

// // Create a function `getDefaultTitle()` that returns `"Untitled"`.
// // Then, create another function `showTitle(title)` that uses `getDefaultTitle()` as the default value if no title is passed.

// function getDefaultTitle() {
//   return 'Untitled ';
// }
// console.log(getDefaultTitle());
// function showTitle(title = getDefaultTitle()) {
//   return title;
// }
// console.log(showTitle('hi'));
// console.log(showTitle());

// // ---

// // ### 6.

// // Create a function `sendEmail(to, subject = "No Subject", body = "No Content")`
// // It should print the full email content using all the parameters.
// function sendEmail(to, subject = 'No Subject', body = 'No Content') {
//   const email = {
//     to,
//     subject,
//     body,
//   };
//   console.log(email);
// }
// sendEmail(
//   'sondos.amr444@gmail.com',
//   'metting reminder',
//   "don't forget our meeting at 10 am , see you"
// );
// sendEmail('sondosamr43@gmail.com');
// // ---

// // ## 🟣 **Bonus: Extra Practice**

// // ### 7.

// // Create a function `discountedPrice(productName, price, discount = 0.2)`
// // It should print the product name and the final price after applying the discount.

// function discountedPrice(productName, price, discount = 0.2) {
//   const finalDiscount = price - price * discount;
//   console.log(` Product: ${productName} \n Final Price: $${finalDiscount}
// `);
// }
// discountedPrice('shoes', 100);
// discountedPrice('Jacket', 200, 0.5);

// // ---

// // ### 8.

// // Write a function `registerStudent(name, grade = "Not graded", passed = false)`
// // Print a message like:
// // `"Student: [name] | Grade: [grade] | Passed: [true/false]"`

// function registerStudent(name, grade = 'Not graded', passed = false) {
//   console.log(`Student: ${name} | Grade: ${grade} | Passed: ${passed}`);
// }
// registerStudent('Abrar', '6', true);
// registerStudent('sondos');

// // ---

// // s-3 first class function & higher order function
// const upperFirstWord = function (str) {
//   const [firstWord, ...other] = str.split(' ');
//   return [firstWord.toUpperCase(), ...other].join(' ');
// };

// const oneWord = function (str) {
//   return str.replaceAll(' ', '');
// };
// function tranformer(str, fun) {
//   console.log(` hi , ${fun(str)}`);
//   console.log(' function name : ', fun.name);
// }
// tranformer('JavaScript is the best!', upperFirstWord);
// tranformer('JavaScript is the best!', oneWord);

// const test = function (t) {
//   console.log('👏');
// };

// document.body.addEventListener('click', test);
// const arr = [1, 2, 3];
// arr.forEach(test);

// Functions Returning Functions

// Regular function expression that returns another function
// const createGreeter = function (greeting) {
//   return function (personName) {
//     console.log(greeting, personName);
//   };
// };
// const greeterHey = createGreeter('Hey');
// greeterHey('Sondos');

// Arrow function version returning another function
// const createGreeterArrow = greeting => {
//   return personName => {
//     console.log(greeting, personName);
//   };
// };
// const greeterArrow = createGreeterArrow('Hey');
// greeterArrow('Abrar');

// Shorter arrow function version
// const createGreeterShort = greeting => personName =>
//   console.log(greeting, personName);
// const greeterShort = createGreeterShort('Hey');
// greeterShort('Tolip');

// the call & apply methods

// const userSondos = {
//   firstName: 'Sondos',
//   lastName: 'Amr',
//   showLocation(country, city) {
//     console.log(
//       `Hi, I'm ${this.firstName} ${this.lastName}, and I currently live in ${city}, ${country}.`
//     );
//   },
// };

// const userAbrar = {
//   firstName: 'Abrar',
//   lastName: 'Amr',
// };

// const showUserLocation = userSondos.showLocation;

// Direct method call
// userSondos.showLocation('Egypt', '10th of Ramadan City');
// userSondos.showLocation('USA', 'California');

// Using call to set `this`
// showUserLocation.call(userSondos, 'UK', 'London');
// showUserLocation.call(userAbrar, 'Palestine', 'Gaza');

// Using apply with location data array
// const abrarLocation = ['Palestine', 'Gaza'];
// showUserLocation.apply(userAbrar, abrarLocation);

// Using spread operator with data
// const sondosNewLocation = ['Germany', 'Berlin'];
// showUserLocation.call(userSondos, ...sondosNewLocation);

// the bind method

// const userLocation = showUserLocation.bind(userSondos);
// userLocation('chaina', 'HongKong');

// another example :

// The call and apply Methods
// const lufthansa = {
//   airline: 'Lufthansa',
//   iataCode: 'LH',
//   bookings: [],
//   // book: function() {}
//   book(flightNum, name) {
//     console.log(
//       `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
//     );
//     this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
//   },
// };

// lufthansa.book(239, 'Jonas Schmedtmann');
// lufthansa.book(635, 'John Smith');

// const eurowings = {
//   airline: 'Eurowings',
//   iataCode: 'EW',
//   bookings: [],
// };

// const book = lufthansa.book;

// Does NOT work
// book(23, 'Sarah Williams');

// Call method
// book.call(eurowings, 23, 'Sarah Williams');
// console.log(eurowings);

// book.call(lufthansa, 239, 'Mary Cooper');
// console.log(lufthansa);

// const swiss = {
//   airline: 'Swiss Air Lines',
//   iataCode: 'LX',
//   bookings: [],
// };

// book.call(swiss, 583, 'Mary Cooper');

// // Apply method
// const flightData = [583, 'George Cooper'];
// book.apply(swiss, flightData);
// console.log(swiss);

// book.call(swiss, ...flightData);

///////////////////////////////////////
// The bind Method
// book.call(eurowings, 23, 'Sarah Williams');

// const bookEW = book.bind(eurowings);
// const bookLH = book.bind(lufthansa);
// const bookLX = book.bind(swiss);

// bookEW(23, 'Steven Williams');

// const bookEW23 = book.bind(eurowings, 23);
// bookEW23('Jonas Schmedtmann');
// bookEW23('Martha Cooper');

// // With Event Listeners
// lufthansa.planes = 300;
// lufthansa.buyPlane = function () {
//   console.log(this);

//   this.planes++;
//   console.log(this.planes);
// };
// // lufthansa.buyPlane();

// document
//   .querySelector('.buy')
//   .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// Partial application

// // Partial application
// const addTax = (rate, value) => value + value * rate;
// console.log(addTax(0.1, 200));

// const addVAT = addTax.bind(null, 0.23);
// // addVAT = value => value + value * 0.23;

// console.log(addVAT(100));
// console.log(addVAT(23));

// function addTax(rate) {
//   return function (value) {
//     return value + value * rate;
//   };
// }
// const t = addTax(0.23);
// t(200);

///////////////////////////////////////
// Coding Challenge #1

/* 
Let's build a simple poll app!

A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.

Here are your tasks:

1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

HINT: Use many of the tools you learned about in this and the last section 😉

BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

GOOD LUCK 😀
*/

const poll = {
  question: 'What is your favourite programming language ?',
  options: ['0 : JS', '1 : Python', ' 2 : Rust', ' 3 : C++'],
  answers: new Array(4).fill(0),
};

poll.registerNewAnswer = function () {
  const questionAsk = Number(
    prompt(` ${this.question} \n ${this.options.join(
      '\n'
    )} \n (Write option number)
    `)
  );
  if (
    typeof questionAsk === 'number' &&
    Number.isInteger(questionAsk) &&
    questionAsk >= 0 &&
    questionAsk <= 3
  ) {
    console.log(questionAsk);
    this.answers[questionAsk]++;
  } else {
    console.log('Invalid input');
  }
};

const pollRegist = poll.registerNewAnswer.bind(poll);

poll.displayResults = function (type = 'array') {
  if (type.toLowerCase().trim() === 'string') {
    console.log(` Poll results are ${this.answers.join(' , ')}`);
  } else {
    console.log(this.answers);
  }
};
poll.displayResults('array');
poll.displayResults('string');
poll.displayResults();
