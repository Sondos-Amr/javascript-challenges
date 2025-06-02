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

const accounts = [account1, account2, account3, account4];

// Elements
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

// forEach With Maps and Sets

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach((value, key, map) => {
  console.log(key, value, map);
});

const set = new Set([1, 2, 3, 4, 1, 4]);
set.forEach((value, _, set) => {
  console.log(value);
});
