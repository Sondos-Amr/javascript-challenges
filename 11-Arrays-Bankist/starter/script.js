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
  type: 'premium',
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
  type: 'standard',
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
  type: 'premium',
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
  type: 'basic',
};

const accounts = [account1, account2, account3, account4];

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

// functions

const createUserName = function (accs) {
  accs.forEach(function (acc) {
    acc.userName = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUserName(accounts);

const calcDisplayMovments = function (movs, sort = false) {
  containerMovements.innerHTML = '';
  const movements = sort ? movs.slice().sort((a, b) => a + b) : movs;
  movements.forEach((mov, i) => {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `
        <div class="movements__row">
          <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
          <div class="movements__value">${mov}€</div>
        </div>
    `;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};
// calcDisplayMovments(account1.movements);

// const deposit = account1.movements.filter(mov => mov > 0);
// console.log(deposit);

// const withdrawals = account1.movements.filter(mov => mov < 0);
// console.log(withdrawals);

const calcDisplayBalance = function (accunt) {
  const balance = accunt.movements.reduce((acc, mov) => acc + mov, 0);
  accunt.balance = balance;
  labelBalance.textContent = `${accunt.balance}€`;
};
// console.log(calcDisplayBalance(account1.movements));

const calcDisplaySummary = function (account) {
  console.log(account.movements);
  const incomes = account.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}€`;

  const out = account.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out)}€`;

  const interest = account.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * account.interestRate) / 100)
    .filter(init => init >= 1)
    .reduce((acc, init) => acc + init, 0);
  labelSumInterest.textContent = `${interest}€`;
};
// calcDisplaySummary(account1.movements);
// update ui
const updateUi = function (acc) {
  calcDisplayMovments(acc.movements);
  calcDisplayBalance(acc);
  calcDisplaySummary(acc);
};
// Implementing login
let currentAcc;
const displatBtnLogin = btnLogin.addEventListener('click', function (e) {
  currentAcc = accounts.find(acc => acc.userName === inputLoginUsername.value);
  e.preventDefault();
  // currentAcc = accounts.find(acc => acc.pin === inputLoginPin.value);
  const userName = inputLoginUsername.value.trim();
  const pin = Number(inputLoginPin.value.trim());

  currentAcc = accounts.find(acc => acc.userName === userName);
  if (!currentAcc)
    return alert(`not found ${currentAcc.userName.splice(' ')[0]}`);
  if (currentAcc?.pin === Number(inputLoginPin.value)) {
    // display the ui
    containerApp.style.opacity = '1';
    // change welcome message
    labelWelcome.textContent = `Welcome back, ${
      currentAcc.owner.split(' ')[0]
    }`;
    inputLoginUsername.value = inputLoginPin.value = '';
    inputTransferAmount.value = inputTransferTo.value = '';
    inputCloseUsername.value = inputClosePin.value = '';
    inputLoanAmount.value = '';
    inputLoginPin.blur();
    updateUi(currentAcc);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.userName === inputTransferTo.value.trim()
  );
  if (!receiverAcc)
    return alert('This account doesn’t exist, please try again.');
  if (receiverAcc?.userName === currentAcc.userName)
    return alert('You cannot send money to yourself.');
  if (amount <= 0) return alert('Please enter a valid amount.');
  if (currentAcc.balance < amount) return alert('Your balance is too low.');

  currentAcc.movements.push(-amount);
  receiverAcc.movements.push(amount);
  updateUi(currentAcc);
});
btnClose.addEventListener('click', function (e) {
  e.preventDefault();
  if (inputCloseUsername.value.trim() !== currentAcc.userName)
    return alert('your username is false , please enter your true name ');
  if (inputClosePin.value.trim() === '')
    return alert('pleace enter your pin .');
  const index = accounts.findIndex(acc => acc.userName === currentAcc.userName);
  accounts.splice(index, 1);
  containerApp.style.opacity = '0';
});

// FindLast and FindLastIndex

console.log(account1.movements);
const lastLargeMovment = account1.movements.findLastIndex(acc => acc > 1000);
const age = account1.movements.length - 1 - lastLargeMovment;
console.log(`Your latest large movement was ${age} movements ago`);

// Some
// Loan approval condition: deposit ≥ 10% of loan

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Number(inputLoanAmount.value.trim());

  if (!amount) return alert('Please enter the amount of your request.');
  if (amount <= 0) return alert('Oops! Your amount must be greater than 0.');

  const checkMov = currentAcc.movements.some(bal => bal >= amount / 10);
  if (!checkMov)
    return alert(
      'Loan denied: You need at least one deposit ≥ 10% of the requested loan.'
    );

  currentAcc.movements.push(amount);
  updateUi(currentAcc);
  inputLoanAmount.value = '';
});

// Every

console.log(account1.movements.every(mov => mov > 0));

// Separate callback
const deposit = mov => mov > 0;
console.log(account1.movements.some(deposit));
console.log(account1.movements.every(deposit));
console.log(account1.movements.filter(deposit));

// Flat
const arr = [[1, 2, 3], [4.5], 6, 7];
console.log(arr.flat());

// deepArr
const arrDeep = [[1, [2, 3], 4], 5, 6];
console.log(arrDeep.flat(2));

// get all balance
const overalBalance = accounts
  .map(acc => acc.movements)
  .flat()
  .reduce((acc, mov) => acc + mov, 0);
console.log(overalBalance);

// flatMap
const overalBalance2 = accounts
  .flatMap(acc => acc.movements)
  .reduce((acc, mov) => acc + mov, 0);
console.log(overalBalance2);
let sort = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  calcDisplayMovments(currentAcc.movements, !sort);
  sort = !sort;
});

// Array Grouping
console.log(account1.movements);
const a1 = account1.movements;
const movsGroup = Object.groupBy(a1, a1 => (a1 > 0 ? 'deposite' : 'withdrals'));
console.log(movsGroup);

const groupedByActive = Object.groupBy(accounts, acc => {
  const movementCount = acc.movements.length;
  if (movementCount >= 8) return 'very active';
  if (movementCount >= 4) return 'active';
  if (movementCount >= 1) return 'moderate';
  return 'inactive';
});
console.log(groupedByActive);
const groupedByType = Object.groupBy(accounts, acc => acc.type);
console.log('type', groupedByType);
const groupedByType2 = Object.groupBy(accounts, ({ type }) => type);
console.log('type', groupedByType2);

// more ways of creating and fillig arrays;
const num = new Array(1, 2, 3, 4);
console.log(num);
const num2 = new Array(4);
const fillArr = num2.fill(2, 2, 3);
console.log(num2);
console.log(fillArr);
const fillArr2 = num2.fill(2);
console.log(fillArr2);

const y = Array.from({ length: 10 }, () => 1);
console.log(y);
const x = Array.from(
  { length: 100 },
  (_, i) => Math.floor(Math.random() * 100) + 1
);
console.log(x);

// nodeList
// const movsUI = ;
labelBalance.addEventListener('click', function () {
  const convertToArr = Array.from(
    document.querySelectorAll('.movements__value'),
    el => Number(el.textContent.replace('€', ''))
  );
  console.log(convertToArr);
  console.log('$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$');
  const arr4 = [...document.querySelectorAll('.movements__value')];

  const arr5 = arr4.map(ele => Number(ele.textContent.replace('€', '')));
  console.log(arr5);
});

///////////////////////////////////////////////////////////////
//  Non-Destructive Alternatives: toReversed, toSorted, toSpliced, with
console.log('################################');
const a11 = account1.movements;
console.log(a11);
const reverceMovs = a11.reverse();
console.log(reverceMovs);
console.log(a11);
console.log('################################');
// with slice()
const a2 = account2.movements;
console.log(a2);
const reverceMovs2 = a2.reverse();
console.log(reverceMovs2);
console.log(a2);
console.log('################################');
// with toReversed()
const a3 = account3.movements;
console.log(a3);
const reverceMovs3 = a3.toReversed();
console.log(reverceMovs3);
console.log(a3);
console.log('################################');

// toSorted
// sort() (destructive):
// const names = ['Sara', 'Ahmed', 'John'];
// names.sort();
// console.log(names); // ['Ahmed', 'John', 'Sara']
// const names = ['Sara', 'Ahmed', 'John'];
// const sortedNames = names.toSorted();

// console.log(sortedNames); // ['Ahmed', 'John', 'Sara']
// console.log(names); // ['Sara', 'Ahmed', 'John']

const names = ['Sara', 'Ahmed', 'John'];
const sortedNames = names.toSorted();

console.log(sortedNames); // ['Ahmed', 'John', 'Sara']
console.log(names); // ['Sara', 'Ahmed', 'John']

const arr66 = [100, 450, 300];
arr66[1] = 2000;

console.log(arr66);
// with()

const arr8 = [100, 450, 300];
const newArr = arr8.with(1, 2000);

console.log(newArr);
console.log(arr8);
// inputLoginPinaddEventListener('input', function (e) {
//   e.preventDefault();
//   // inputLoginPin.value = '17777711';
//   const len = inputLoginPin.value.length;
//   const last = String(inputLoginPin.value).slice(len);
//   // last.padStart(20, '*');
//   inputLoginPin.value = last.padStart(len, '*');
// });
// inputLoginPin.value = '17777711';
// const len = inputLoginPin.value.length();
// const last = inputLoginPin.value.slice(-2);
// // last.padStart(20, '*');
// inputLoginPin.value = last.padstart(len, '*');

// let realPin = '';

// inputLoginPin.addEventListener('input', function (e) {
//   console.log(e);
//   const newChar = e.data; // The newly typed character
//   const isDelete = e.inputType === 'deleteContentBackward';

//   if (isDelete) {
//     realPin = realPin.slice(0, -1); // remove last character
//   } else if (!isNaN(e.target.value.slice(-1))) {
//     // Allow only numbers
//     realPin += e.target.value.slice(-1);
//   }

//   // Show masked input (last 2 digits visible, rest masked)
//   const masked =
//     realPin.length <= 2
//       ? '*'.repeat(realPin.length)
//       : '*'.repeat(realPin.length - 2) + realPin.slice(-2);

//   inputLoginPin.value = masked;
// });

// console.log(accounts);
// const calcDisplayMovments = function (movements) {
//   movements.array.forEach((mov, i) => {
//     containerMovements.addEventListener('click', function () {
//       // console.log(mov);
//     });
//   });
// };
// calcDisplayMovments(account1.movements);

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
// const calcAverageHumanAge = ages => {
//   return ages
//     .map(age => (age <= 2 ? 2 * age : 16 + age * 4))
//     .filter(age => age >= 18)
//     .reduce((act, age, i, arr) => act + age / arr.length, 0);
// };
// const dogsAges1 = [5, 2, 4, 1, 15, 8, 3];
// const avg1 = calcAverageHumanAge(dogsAges1);
// console.log(avg1);
// const dogsAges2 = [16, 6, 10, 5, 6, 1, 4];
// const avg2 = calcAverageHumanAge(dogsAges2);
// console.log(avg2);

// the find method();

// const firstWithdrawal = account1.movements.find(mov => mov < 0);
// console.log(account1.movements);
// console.log(firstWithdrawal);
// console.log(accounts);

// const account = accounts.find(acc => acc.owner === 'Jessica Davis');
// console.log(account);

// let account22;
// for (const acc of accounts) {
//   if (acc.owner === 'Jessica Davis') {
//     account22 = acc;
//     break;
//   }
// }
// console.log(account22);

///////////////////////////////////////
// Coding Challenge #4

/*
This time, Julia and Kate are studying the activity levels of different dog breeds.

YOUR TASKS:
1. Store the the average weight of a "Husky" in a variable "huskyWeight"
2. Find the name of the only breed that likes both "running" and "fetch" ("dogBothActivities" variable)
3. Create an array "allActivities" of all the activities of all the dog breeds
4. Create an array "uniqueActivities" that contains only the unique activities (no activity repetitions). HINT: Use a technique with a special data structure that we studied a few sections ago.
5. Many dog breeds like to swim. What other activities do these dogs like? Store all the OTHER activities these breeds like to do, in a unique array called "swimmingAdjacent".
6. Do all the breeds have an average weight of 10kg or more? Log to the console whether "true" or "false".
7. Are there any breeds that are "active"? "Active" means that the dog has 3 or more activities. Log to the console whether "true" or "false".

BONUS: What's the average weight of the heaviest breed that likes to fetch? HINT: Use the "Math.max" method along with the ... operator.

TEST DATA:
*/

const breeds = [
  {
    breed: 'German Shepherd',
    averageWeight: 32,
    activities: ['fetch', 'swimming'],
  },
  {
    breed: 'Dalmatian',
    averageWeight: 24,
    activities: ['running', 'fetch', 'agility'],
  },
  {
    breed: 'Labrador',
    averageWeight: 28,
    activities: ['swimming', 'fetch'],
  },
  {
    breed: 'Beagle',
    averageWeight: 12,
    activities: ['digging', 'fetch'],
  },
  {
    breed: 'Husky',
    averageWeight: 26,
    activities: ['running', 'agility', 'swimming'],
  },
  {
    breed: 'Bulldog',
    averageWeight: 36,
    activities: ['sleeping'],
  },
  {
    breed: 'Poodle',
    averageWeight: 18,
    activities: ['agility', 'fetch'],
  },
];

// task: 1

// case 1 : using forEach();
const avergeHusky = function (breaks) {
  breaks.forEach(type => {
    if (type.breed === 'Husky') return (type.huskyWeight = type.averageWeight);
  });
};
avergeHusky(breeds);
console.log(breeds);

// case 2: using find();

const husky = breeds.find(breed => breed.breed === 'Husky');
if (husky) husky.huskyWeight = husky.averageWeight;
console.log(husky);

// ✅ Task 2: Find the breed that likes both "running" and "fetch"

// Case 1: Using find() and saving breed separately

// const dog = breeds.find(
//   m => m.activities.includes('fetch') && m.activities.includes('running')
// );
// const dogBothActivities = dog.breed;

// Case 2: Using optional chaining to access breed directly

const dogBothActivities = breeds.find(
  m => m.activities.includes('fetch') && m.activities.includes('running')
)?.breed;

// ✅ Task 3: Create an array of all activities from all dog breeds

// Case 1: Using map + flat

// const allActivities = breeds.map(bog => bog.activities).flat();
// console.log(allActivities);

// Case 2: Using flatMap (cleaner and simpler)
const allActivities = breeds.flatMap(bog => bog.activities);
console.log(allActivities);

// ✅ Task 4: Get unique activities (remove duplicates)

const uniqueActivities = [...new Set(allActivities)];
console.log(uniqueActivities);

// ✅ Task 5: Get unique activities of dogs that like swimming (excluding 'swimming' itself)

const swimmingAdjacent = [
  ...new Set(
    breeds
      .filter(dog => dog.activities.includes('swimming'))
      .flatMap(active => active.activities)
      .filter(activity => activity !== 'swimming')
  ),
];

// ✅ Task 6: Check if all breeds have an average weight of 10kg or more
const allDogsHeavy = breeds.every(bog => bog.averageWeight >= 10);
console.log(allDogsHeavy);

// ✅ Task 7: Check if any breed has 3 or more activities (considered active)

const hasActiveDogs = breeds.some(bog => bog.activities.length >= 3);
console.log(hasActiveDogs);

// BONUS

const a = breeds
  .filter(bog => bog.activities.includes('fetch'))
  .reduce((acc, curr) => {
    return curr.averageWeight > acc.averageWeight ? curr : acc;
  });
console.log(a);

////////////////////////////
// Array method practice

// // get total of mony in the bank
// labelWelcome.addEventListener('click', function () {
//   const bankDepositSum  = accounts.map(acc => acc.balance);
//   //  .reduce((acc, ele) => acc + ele.balance, 0);
//   console.log(bankDepositSum );
// });

// 1.
const bankDepositSum = accounts
  .flatMap(acc => acc.movements)
  .filter(mov => mov > 0)
  .reduce((acc, mov) => acc + mov, 0);
console.log(bankDepositSum);

//2.

// case 1
// const numDeposit1000 = accounts
//   .flatMap(ele => ele.movements)
//   .filter(ele => ele >= 1000).length;
// console.log(numDeposit1000);

// case

const numDeposit1000 = accounts
  .flatMap(ele => ele.movements)
  .reduce((count, curr) => (curr >= 1000 ? ++count : count), 0);

console.log(numDeposit1000);

// 3.
const { deposits, withdrawals } = accounts
  .flatMap(acc => acc.movements)
  .reduce(
    (sums, cur) => {
      // case 1
      // cur > 0 ? (sums.deposits += cur) : (sums.withdrawals += cur);
      // case 2
      sums[cur > 0 ? 'deposits' : 'withdrawals'] += cur;
      return sums;
    },
    { deposits: 0, withdrawals: 0 }
  );
console.log(deposits, withdrawals);

const sums = accounts
  .flatMap(acc => acc.movements)
  .reduce(
    (sums, cur) => {
      // cur > 0 ? (sums[0] += cur) : (sums[1] += cur);
      sums[cur > 0 ? 0 : 1] += cur;
      return sums;
    },
    [0, 0]
  );
console.log(sums);

// 4.
// Case 1
// const convertTitleCase = function (title) {
//   const exceptions = ['a', 'an', 'and', 'the', 'but', 'or', 'on', 'in', 'with'];
//   const titleCase = title
//     .toLowerCase()
//     .split(' ')
//     .map(word =>
//       exceptions.includes(word) ? word : word[0].toUpperCase() + word.slice(1)
//     )
//     .join(' ');
//   return titleCase;
// };
// console.log(convertTitleCase('this is a nice title'));
// console.log(convertTitleCase('this is a LONG title but not too long'));
// console.log(convertTitleCase('and here is another title with an EXAMPLE'));

// Case 2
const convertTitleCase = function (title) {
  const captlize = str => str[0].toUpperCase() + str.slice(1);
  const exceptions = ['a', 'an', 'and', 'the', 'but', 'or', 'on', 'in', 'with'];
  const titleCase = title
    .toLowerCase()
    .split(' ')
    .map(word => (exceptions.includes(word) ? word : captlize(word)))
    .join(' ');
  return captlize(titleCase);
};
console.log(convertTitleCase('this is a nice title'));
console.log(convertTitleCase('this is a LONG title but not too long'));
console.log(convertTitleCase('and here is another title with an EXAMPLE'));

///////////////////////////////////////
// Coding Challenge #5

/* 
Julia and Kate are still studying dogs. This time they are want to figure out if the dogs in their are eating too much or too little food.

- Formula for calculating recommended food portion: recommendedFood = weight ** 0.75 * 28. (The result is in grams of food, and the weight needs to be in kg)
- Eating too much means the dog's current food portion is larger than the recommended portion, and eating too little is the opposite.
- Eating an okay amount means the dog's current food portion is within a range 10% above and below the recommended portion (see hint).

YOUR TASKS:
1. Loop over the array containing dog objects, and for each dog, calculate the recommended food portion (recFood) and add it to the object as a new property. Do NOT create a new array, simply loop over the array (We never did this before, so think about how you can do this without creating a new array).
2. Find Sarah's dog and log to the console whether it's eating too much or too little. HINT: Some dogs have multiple users, so you first need to find Sarah in the owners array, and so this one is a bit tricky (on purpose) 🤓
3. Create an array containing all owners of dogs who eat too much (ownersTooMuch) and an array with all owners of dogs who eat too little (ownersTooLittle).
4. Log a string to the console for each array created in 3., like this: "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"
5. Log to the console whether there is ANY dog eating EXACTLY the amount of food that is recommended (just true or false)
6. Log to the console whether ALL of the dogs are eating an OKAY amount of food (just true or false)
7. Create an array containing the dogs that are eating an OKAY amount of food (try to reuse the condition used in 6.)
8. Group the dogs into the following 3 groups: 'exact', 'too-much' and 'too-little', based on whether they are eating too much, too little or the exact amount of food, based on the recommended food portion.

9. Group the dogs by the number of owners they have
10. Sort the dogs array by recommended food portion in an ascending order. Make sure to NOT mutate the original array!

HINT 1: Use many different tools to solve these challenges, you can use the summary lecture to choose between them 😉
HINT 2: Being within a range 10% above and below the recommended portion means: current > (recommended * 0.90) && current < (recommended * 1.10). Basically, the current portion should be between 90% and 110% of the recommended portion.

TEST DATA:
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John', 'Leo'] },
  { weight: 18, curFood: 244, owners: ['Joe'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

GOOD LUCK 😀
*/

const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John', 'Leo'] },
  { weight: 18, curFood: 244, owners: ['Joe'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

console.log(
  'Challenge 5 in section 11 ##############################################'
);

// 1.
// const calcRecFood = dogs => {
//   dogs.forEach(dog => {
//     const recommended = dog.weight ** 0.75 * 28;
//     dog.recFood = Number((recommended / 1000).toFixed(2));
//   });
// };

// calcRecFood(dogs);
// console.log(dogs);
const calcRecFood = dogs => {
  dogs.forEach(dog => (dog.recFood = Math.floor(dog.weight ** 0.75 * 28)));
};

calcRecFood(dogs);
console.log(dogs);

// 2.
const dogSarah = dogs.find(dog => dog.owners.includes('Sarah'));
console.log(dogSarah);
const dogSarahFeedingStatus = dogSarah
  ? dogSarah.curFood > dogSarah.recFood
    ? "Sarah's dog eats too much"
    : "Sarah's dog eats too little"
  : "Sarah's dog not found.";
console.log(dogSarahFeedingStatus);

// 3.
// case 1
let d1 = [];
let d2 = [];
const s = dogs.forEach(dog => {
  if (dog.curFood > dog.recFood) return d1.push(dog.owners);
  if (dog.curFood < dog.recFood) return d2.push(dog.owners);
  if (dog.curFood > dog.recFood * 0.9 && dog.curFood < dog.recFood * 1.1)
    return console.log('ok', dog.owners);
});
console.log('big', d1.flat());
console.log('small', d2.flat());

// Case 2
const ownersEatTooMuch = dogs
  .filter(dog => dog.curFood > dog.recFood * 1.1)
  .flatMap(dog => dog.owners);

const ownersEatTooLittle = dogs
  .filter(dog => dog.curFood < dog.recFood * 0.9)
  .flatMap(dog => dog.owners);
console.log('too much', ownersEatTooMuch);
console.log('too little', ownersEatTooLittle);

// Case 3
const feedingGroups = dogs.reduce(
  (acc, ele) => {
    if (ele.curFood > ele.recFood * 1.1) {
      acc.tooMush.push(...ele.owners);
    } else if (ele.curFood < ele.recFood * 0.9) {
      acc.tooLittle.push(...ele.owners);
    }
    return acc;
  },
  {
    tooMush: [],
    tooLittle: [],
  }
);
console.log('owners Much ', feedingGroups.tooMush);
console.log('owners Litter', feedingGroups.tooLittle);

// with destrcturing
const { tooMush, tooLittle } = dogs.reduce(
  (acc, ele) => {
    if (ele.curFood > ele.recFood * 1.1) {
      acc.tooMush.push(...ele.owners);
    } else if (ele.curFood < ele.recFood * 0.9) {
      acc.tooLittle.push(...ele.owners);
    }
    return acc;
  },
  {
    tooMush: [],
    tooLittle: [],
  }
);
console.log('owners Much ', tooMush);
console.log('owners Litter', tooLittle);

// 4.
// Case 1
const getDogOwnersByFood = function (...dog) {
  const [much, little] = dog;
  const addOwnerText = owners => {
    console.log(
      owners.join(' and ') +
        (owners.length === much.length
          ? "'s dogs eat too much!"
          : "'s dogs eat too little!")
    );
  };

  addOwnerText(much);
  addOwnerText(little);
};
getDogOwnersByFood(tooMush, tooLittle);

// Case 2
console.log(`${tooMush.join(' and ')}'s dogs eat too much!`);

console.log(`${tooLittle.join('and')}'s dogs eat too little!`);

// 5.

const isAnyDogEatingExactly = dogs.some(dog => dog.curFood === dog.recFood);
console.log(isAnyDogEatingExactly);

// // 6.
// const isEatingOk = dogs.every(
//   dog => dog.curFood < dog.recFood * 1.1 && dog.curFood > dog.recFood * 0.9
// );
// console.log(isEatingOk);

// // 7.
// const dogsEatingOk = dogs.filter(
//   dog => dog.curFood < dog.recFood * 1.1 && dog.curFood > dog.recFood * 0.9
// );
// console.log('dogs eating ok', dogsEatingOk);

// Case 2 for Task 6 & 7
const isEatingOk = dog =>
  dog.curFood > dog.recFood * 0.9 && dog.curFood < dog.recFood * 1.1;

// 6.
const checkEatingOk = dogs.every(isEatingOk);
console.log('All dogs eating okay:', checkEatingOk);

// 7.
const dogsEatingOk = dogs.filter(isEatingOk);
console.log('Dogs eating okay:', dogsEatingOk);

// 8.
// Case 1
const { exactG, tooMuchG, tooLittleG } = dogs.reduce(
  (acc, dog) => {
    if (dog.curFood > dog.recFood * 0.9 && dog.curFood < dog.recFood * 1.1) {
      acc.exactG.push(dog);
    } else if (dog.curFood < dog.recFood) {
      acc.tooLittleG.push(dog);
    } else {
      acc.tooMuchG.push(dog);
    }
    return acc;
  },
  { exactG: [], tooMuchG: [], tooLittleG: [] }
);
console.log(exactG);
console.log(tooLittleG);
console.log(tooMuchG);
