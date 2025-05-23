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
const createGreeter = function (greeting) {
  return function (personName) {
    console.log(greeting, personName);
  };
};
const greeterHey = createGreeter('Hey');
greeterHey('Sondos');

// Arrow function version returning another function
const createGreeterArrow = greeting => {
  return personName => {
    console.log(greeting, personName);
  };
};
const greeterArrow = createGreeterArrow('Hey');
greeterArrow('Abrar');

// Shorter arrow function version
const createGreeterShort = greeting => personName =>
  console.log(greeting, personName);
const greeterShort = createGreeterShort('Hey');
greeterShort('Tolip');

// the call & apply methods

const userSondos = {
  firstName: 'Sondos',
  lastName: 'Amr',
  showLocation(country, city) {
    console.log(
      `Hi, I'm ${this.firstName} ${this.lastName}, and I currently live in ${city}, ${country}.`
    );
  },
};

const userAbrar = {
  firstName: 'Abrar',
  lastName: 'Amr',
};

const showUserLocation = userSondos.showLocation;

// Direct method call
userSondos.showLocation('Egypt', '10th of Ramadan City');
userSondos.showLocation('USA', 'California');

// Using call to set `this`
showUserLocation.call(userSondos, 'UK', 'London');
showUserLocation.call(userAbrar, 'Palestine', 'Gaza');

// Using apply with location data array
const abrarLocation = ['Palestine', 'Gaza'];
showUserLocation.apply(userAbrar, abrarLocation);

// Using spread operator with data
const sondosNewLocation = ['Germany', 'Berlin'];
showUserLocation.call(userSondos, ...sondosNewLocation);

// the bind method

const userLocation = showUserLocation.bind(userSondos);
userLocation('chaina', 'HongKong');
