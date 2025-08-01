'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-05-27T17:01:17.194Z',
    '2020-07-11T23:36:17.929Z',
    '2020-07-12T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

/////////////////////////////////////////////////
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
// Functions
const formatMovementDate = function (date, local) {
  const calcDaysPassed = (date1, date2) =>
    Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));
  const disPassed = calcDaysPassed(new Date(), date);
  if (disPassed === 0) return 'Today';
  if (disPassed === 1) return 'Yesterday';
  if (disPassed <= 7) return `${disPassed} days ago`;
  else {
    const day = `${date.getDate()}`.padStart(2, '0');

    const month = `${date.getMonth() + 1}`.padStart(2, '0');

    const year = date.getFullYear();

    // return `${day}/${month}/${year}`;
    return Intl.DateTimeFormat(local).format(date);
  }
};

const formatCur = function (currency, local, value) {
  const option = {
    style: 'currency',
    currency: currency,
  };
  return Intl.NumberFormat(local, option).format(value);
};
const displayMovements = function (acc, sort = false) {
  containerMovements.innerHTML = '';

  const combinedMovsDate = acc.movements.map((mov, i) => {
    return {
      movement: mov,
      movementsDates: acc.movementsDates.at(i),
    };
  });
  if (sort) combinedMovsDate.sort((a, b) => a.movement - b.movement);

  combinedMovsDate.forEach((obj, i) => {
    const { movement, movementsDates } = obj;
    const date = new Date(movementsDates);
    const displayDate = formatMovementDate(date, acc.local);

    const type = movement > 0 ? 'deposit' : 'withdrawal';
    // const formattedMov = new Intl.NumberFormat(acc.local, {
    //   style: 'currency',
    //   currency: acc.currency,
    // }).format(movement);
    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
              <div class="movements__date">${displayDate}</div>

    
        <div class="movements__value">${formatCur(
          acc.currency,
          acc.local,
          movement
        )}</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  // const option = {
  //   style: 'currency',
  //   currency: acc.currency,
  // };
  // const formattedBalance = Intl.NumberFormat(acc.local, option).format(
  //   acc.balance
  // );
  labelBalance.textContent = `${formatCur(
    acc.currency,
    acc.local,
    acc.balance
  )}`;
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${formatCur(acc.currency, acc.local, incomes)}`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${formatCur(
    acc.currency,
    acc.local,
    Math.abs(out)
  )}`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${formatCur(
    acc.currency,
    acc.local,
    interest
  )}`;
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};

const startLogOutTimer = function () {
  // labelTimer.textContent = `${hour}:${minute}`;
  let time = 10;
  const tick = function () {
    const min = String(Math.trunc(time / 60)).padStart(2, 0);
    const sec = String(time % 60).padStart(2, 0);
    labelTimer.textContent = `${min}:${sec}`;
    if (time === 0) {
      clearInterval(timer);
      labelWelcome.textContent = `Log in to get started`;
      containerApp.style.opacity = 0;
    }
    time--;
  };
  tick();
  const timer = setInterval(tick, 1000);
};

///////////////////////////////////////
// Event handlers
let currentAccount;

// Experimenting API
// const now = new Date();
// const f = new Intl.DateTimeFormat('ar').format(now);
// console.log(f);

btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === +inputLoginPin.value) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;

    containerApp.style.opacity = 100;

    const now = new Date();
    // Experimenting API
    const options = {
      hour: 'numeric',
      minute: 'numeric',
      day: 'numeric',
      month: 'numeric',
      year: 'numeric',
      // weekday: 'long',
    };
    const local = navigator.language;
    console.log('OOOOOOOOOOOOO', local);
    labelDate.textContent = new Intl.DateTimeFormat(
      currentAccount.locale,
      options
    ).format(now);

    // const day = `${now.getDate()}`.padStart(2, '0');
    // // const month = now.getMonth() + 1 <= 9 ? `0${now.getMonth() + 1}` : now.getMonth() + 1;
    // const month = `${now.getMonth() + 1}`.padStart(2, '0');
    // const year = now.getFullYear();
    // const hour = `${now.getHours()}`.padStart(2, '0');
    // const min = `${now.getMinutes()}`.padStart(2, '0');

    // labelDate.textContent = `${day}/${month}/${year}, ${hour}:${min}`;

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    startLogOutTimer();
    // Update UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = +inputTransferAmount.value;
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    currentAccount.movementsDates.push(new Date().toISOString());
    receiverAcc.movementsDates.push(new Date().toISOString());

    // Update UI
    updateUI(currentAccount);
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Math.floor(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    // Add movement
    setTimeout(() => {
      currentAccount.movements.push(amount);
      currentAccount.movementsDates.push(new Date().toISOString());

      // Update UI
      updateUI(currentAccount);
    }, 2500);
  }
  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    +inputClosePin.value === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);
    // .indexOf(23)

    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// Session 1
// convert numbers
// conversion
console.log(Number('25'));
console.log(+'4');

// parsing
console.log(Number.parseInt('80px'));
console.log(Number.parseInt('p80'));

console.log(Number.parseFloat('2.5rem'));
console.log(Number.parseInt('2.5rem'));

// global function  - u can writte without Function Of Number like this :
console.log(parseFloat('2.5rem'));
console.log(parseInt('2rem'));

// NaN
console.log(Number.isNaN('4'));
console.log(Number.isNaN(4));
console.log('####');
console.log(Number.isNaN(+'4rem'));
console.log(Number.isNaN(23 / 0));

console.log('######');
console.log(Number.isFinite(20));
console.log(Number.isFinite('20'));

console.log('######');
console.log(Number.isInteger(23));
console.log(Number.isInteger(23.5));
console.log(Number.isInteger(+'23'));
console.log(Number.isInteger(+'23r'));

// Session 2
// Math & Rounding

console.log(Math.trunc(Math.random() * 2) + 1);
const randomInt = (min, max) =>
  Math.trunc(Math.random() * (max - min + 1)) + min;
console.log(randomInt(10, 20));

// Rounding Integers
const getRandomBetween = (min, max) => {
  return Math.trunc(Math.random() * (max - min + 1)) + min;
};
console.log(getRandomBetween(5, 10));
// case 1
const diceRoll = Math.trunc(Math.random() * 6 + 1);
console.log(diceRoll);
// case 2
const arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
const diceRoll2 = Math.trunc(Math.random() * arr.length);
console.log(diceRoll2);

// Rounding decimals
console.log((2.7).toFixed(0));
console.log((2.795).toFixed(2));
console.log((2.739).toFixed(2));

//  NOTE : The toFixed method returns a string, so you can use type coercion like this:
console.log(+(2.739).toFixed(2));

// Session 3 - Reminder Operator

const isEven = num => num % 2 === 0;
console.log(isEven(8));
console.log(isEven(23));
console.log(isEven(514));

labelBalance.addEventListener('click', function () {
  [...document.querySelectorAll('.movements__row')].forEach((row, i) => {
    if (i % 2 === 0) row.style.backgroundColor = 'blue';
    // if (i % 2 !== 0) row.style.backgroundColor = 'yellow';
    if (i % 3 === 0) row.style.backgroundColor = 'yellow';
  });
});

// Session 4 - Numeric Separators
const num = 50_00.5;
const num2 = 50_00_00;
console.log(num);
console.log(num2);

// Session 5 - BigInt
console.log(Number.MAX_SAFE_INTEGER);
console.log(945474725456768765456468);
console.log(945474725456768765456468n);
console.log(BigInt(945474725456768765456468));

////////////////////// Dates & Times
// Session 6 - Creating Dates
// const now = new Date();
// console.log(now);
// console.log(now.getFullYear());
// console.log(now.getMonth());
// console.log(now.getDay());
// console.log(now.toISOString());

const future = new Date(2037, 10, 19, 15, 23);
console.log(+future);
const calcDays = (date1, date2) =>
  Math.abs((date2 - date1) / (1000 * 60 * 60 * 24));
const day1 = calcDays(new Date(2037, 3, 4), new Date(2037, 3, 14));
console.log(day1);

////////////////////////////////////////
///////////////////////////////////////

const nums = 3884764.23;

const options = {
  style: 'percent',
  unit: 'celsius',
  currency: 'EUR',
  useGrouping: false,
};
console.log('us', new Intl.NumberFormat('en', options).format(nums));

console.log('egypt', new Intl.NumberFormat('ar-SY', options).format(nums));

console.log('germany', new Intl.NumberFormat('de-De', options).format(nums));

console.log(
  navigator.language,
  new Intl.NumberFormat(navigator.language, options).format(nums)
);

/// setTimeout();

const ingredients = ['olives', 'spinach'];
console.log('1 pizza please!');
const pizzaTimer = setTimeout(
  function (count, ing1, ing2) {
    console.log(`hi this your ${count} pizza with ${ing1} and ${ing2} `);
  },
  3000,
  2,
  ...ingredients
);
console.log('Waiting...');
if (ingredients.includes('olives')) clearTimeout(pizzaTimer);

// setInterval(() => {
//   const now = new Date();
//   const hour = now.getHours();
//   const minute = now.getMinutes();
//   const second = now.getSeconds();
//   console.log(`${hour}/${minute}/${second}`);
// }, 3000);
