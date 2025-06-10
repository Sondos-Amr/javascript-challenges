'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

// const accounts = [account1, account2, account3, account4];

// // Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

// const displayMovements = function (movements) {
//   movements.array.forEach((mov, i) => {
//     containerMovements.addEventListener('click', function () {
//       // console.log(mov);
//     });
//   });
// };
// displayMovements(account1.movements);

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

/////////////////////////////////////////////////

//  slice method

// const arr = ['a', 'b', 'c', 'd', 'e'];
// console.log(arr.slice(2)); // it make new array
// console.log(arr.slice(1, 3)); // start parmeter and end note: end parmeter not include the last index
// console.log(arr.slice(-3, -1)); // u can use negative value
// console.log(arr.slice(1, -2)); // u can custom between positive and  nagative parmeters
// console.log(arr.slice()); // shallo it means copy
// console.log([...arr]); // cope with spread operator

// splice method
// console.log('splice method');
// console.log(arr.splice(0, 2)); // it return select ele or deleted ele in new array
// console.log(arr); // print orignal array without slice ele or delete ele

// at method
// console.log(arr[0]);
// console.log(arr.at(0));

// console.log(arr[-1]); // it is not work the result is undefind
// console.log(arr[arr.length - 1]); // it work
// console.log(arr.at(-1));
// u can used with string like this ;
// console.log('sondos'.at(0));

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// // looping array

// for (const [i, mov] of movements.entries()) {
//   if (mov > 0) {
//     console.log(`${i + 1} you deposited ${mov} `);
//   } else {
//     console.log(` you withdraw ${Math.abs(mov)}`);
//   }
// }

// console.log('---- forEach ----- ');

// movements.forEach(function (mov, i, arr) {
//   if (mov > 0) {
//     console.log(`${i + 1} you deposited ${mov} `);
//   } else {
//     console.log(` you withdraw ${Math.abs(mov)}`);
//   }
// });

// // forEach with arrow function

// movements.forEach((ele, i, arr) => {
//   console.log(`${i + 1}: ${Math.abs(ele)}`);
// });

// // when we use entir array in the forEach

// const fruits = ['apple', 'banana', 'cherry'];

// fruits.forEach(function (fruit, index, arr) {
//   let nextFruit = arr[index + 1]; // get the next item
//   if (!nextFruit) nextFruit = 'No more fruits'; // if there is no next item

//   console.log(fruit + ' is followed by ' + nextFruit);
// });

// // forEach With Maps and Sets

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// currencies.forEach((value, key, map) => {
//   console.log(key, value, map);
// });

// const set = new Set([1, 2, 3, 4, 1, 4]);
// set.forEach((value, _, set) => {
//   console.log(value);
// });

///////////////////////////////////////
// Coding Challenge #1

/* 
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.

Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:

1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
4. Run the function for both test datasets

HINT: Use tools from all lectures in this section so far 😉

TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

// 1

// function checkDogs(dogsJulia, dogsKate) {
//   // const removeJuliaCats = dogsJulia.slice(1, 3);
//   const removeJuliaCats = dogsJulia.slice(1, -2);
//   const allDogsAge = removeJuliaCats.concat(dogsKate);
//   allDogsAge.forEach((dogAge, i) => {
//     dogAge >= 3
//       ? console.log(
//           `Dog number ${i + 1} is an adult, and is ${dogAge} years old`
//         )
//       : console.log(`Dog number ${i + 1} is still a puppy 🐶`);
//   });
// }

// console.log('_____ First groub _____');
// checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);

// console.log('_____ Second groub _____');
// checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);

///////////////////////////////////////
// Coding Challenge #2

/* 
Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.

Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:

1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)
4. Run the function for both test datasets

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

// const calcAverageHumanAge = function (ages) {
//   const humanAges = ages.map(age => {
//     return age <= 2 ? 2 * age : 16 + age * 4;
//   });
//   const adults = humanAges.filter(age => {
//     return age >= 18;
//   });
//   const average = adults.reduce((act, age, i, arr) => {
//     return act + age / arr.length;
//   }, 0);
//   return average;
// };
// const dogsAges1 = [5, 2, 4, 1, 15, 8, 3];
// const avg1 = calcAverageHumanAge(dogsAges1);
// console.log(avg1);
// const dogsAges2 = [16, 6, 10, 5, 6, 1, 4];
// const avg2 = calcAverageHumanAge(dogsAges2);
// console.log(avg2);

// Chaining Methods

// const calcDisplayBalance = function (movements) {
//   const balance = movements
//     .filter(mov => mov > 0)
//     .reduce((acc, mov) => acc + mov, 0);
//   labelSumIn.textContent = `${balance}€`;

//   const out = movements
//     .filter(mov => mov < 0)
//     .reduce((acc, mov) => acc + mov, 0);
//   labelSumOut.textContent = `${Math.abs(out)}€`;

//   const interest = movements
//     .filter(mov => mov > 0)
//     .map(deposit => (deposit * 1.2) / 100)
//     .filter(init => init >= 1)
//     .reduce((acc, init) => acc + init, 0);
//   labelSumInterest.textContent = `${interest}€`;
// };
// calcDisplayBalance(account1.movements);

///////////////////////////////////////
// Coding Challenge #3

/* 
Rewrite the 'calcAverageHumanAge' function from the previous challenge, but this time as an arrow function, and using chaining!

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/
const calcAverageHumanAge = ages => {
  return ages
    .map(age => (age <= 2 ? 2 * age : 16 + age * 4))
    .filter(age => age >= 18)
    .reduce((act, age, i, arr) => act + age / arr.length, 0);
};
const dogsAges1 = [5, 2, 4, 1, 15, 8, 3];
const avg1 = calcAverageHumanAge(dogsAges1);
console.log(avg1);
const dogsAges2 = [16, 6, 10, 5, 6, 1, 4];
const avg2 = calcAverageHumanAge(dogsAges2);
console.log(avg2);
