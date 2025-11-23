'use strict';
const budget = Object.freeze([
  { value: 250, description: 'Sold old TV 📺', user: 'jonas' },
  { value: -45, description: 'Groceries 🥑', user: 'jonas' },
  { value: 3500, description: 'Monthly salary 👩‍💻', user: 'jonas' },
  { value: 300, description: 'Freelancing 👩‍💻', user: 'jonas' },
  { value: -1100, description: 'New iPhone 📱', user: 'jonas' },
  { value: -20, description: 'Candy 🍭', user: 'matilda' },
  { value: -125, description: 'Toys 🚂', user: 'matilda' },
  { value: -1800, description: 'New Laptop 💻', user: 'jonas' },
]);

const spendingLimits = Object.freeze({
  jonas: 1500,
  matilda: 100,
});

// spendingLimits.sondos = 47;
// console.log(spendingLimits);
// const limit = ele => spendingLimits?.[ele.user] ?? 0;
const getLimit = (limit, user) => limit[user] ?? 0;

// Pure function
const addExpense = function (
  state,
  limits,
  value,
  description,
  user = 'jonas'
) {
  const cleanUser = user.toLowerCase();

  return value <= getLimit(limits, cleanUser)
    ? [
        ...state,
        {
          value: -value,
          description,
          user: cleanUser,
        },
      ]
    : state;
};

const newBudget1 = addExpense(budget, spendingLimits, 10, 'Pizza 🍕');
console.log(newBudget1);

const newBudget2 = addExpense(
  newBudget1,
  spendingLimits,
  100,
  'Going to movies 🍿',
  'Matilda'
);
console.log(newBudget2);

const newBudget3 = addExpense(newBudget2, spendingLimits, 200, 'Stuff', 'Jay');
console.log(newBudget3);

const checkExpenses = (state, limits) =>
  state.map(ele =>
    ele.value < -getLimit(limits, ele.user) ? { ...ele, flag: 'limit' } : ele
  );

const finalBudget = checkExpenses(newBudget3, spendingLimits);
console.log(finalBudget);

const logBigExpenses = function (state, bigLimit) {
  // let output = '';
  // for (const entry of state) {
  //   entry.value <= -bigLimit
  //     ? (output += `${entry.description.slice(-2)} / `)
  //     : '';
  // }
  // output = output.slice(0, -2);

  // const bigExpenses = state
  //   .filter(entry => entry.value <= -bigLimit)
  //   .map(entry => entry.description.slice(-2))
  //   .join(' / ');
  // console.log(bigExpenses);

  const bigExpenses2 = state
    .filter(entry => entry.value <= -bigLimit)
    .reduce((str, cur) => `${str} / ${cur.description.slice(-2)}`, '');
  console.log(bigExpenses2);

  // const result = state
  //   .filter(el => el.value <= -bigLimit)
  //   .map(el => el.description.slice(-2))
  //   .join(' / ');
  // console.log(result);
};

logBigExpenses(finalBudget, 500);
