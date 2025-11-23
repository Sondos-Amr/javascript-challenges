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
const getLimit = user => spendingLimits[user] ?? 0;

const addExpense = function (
  state,
  limits,
  value,
  description,
  user = 'jonas'
) {
  const cleanUser = user.toLowerCase();

  if (value <= getLimit(cleanUser)) {
    return [
      ...state,
      {
        value: -value,
        description,
        user: cleanUser,
      },
    ];
  }
};
addExpense(budget, spendingLimits, 10, 'Pizza 🍕');
addExpense(budget, spendingLimits, 100, 'Going to movies 🍿', 'Matilda');
addExpense(budget, spendingLimits, 200, 'Stuff', 'Jay');

const checkExpenses = function () {
  // budget.forEach(ele =>
  //   ele.value < -limit(ele) ? (ele.flag = 'limit') : null
  // );

  // for (const entry of budget)
  //   entry.value <= -limit(entry) ? (entry.flag = 'limit') : null;

  for (const entry of budget)
    if (entry.value <= -getLimit(entry)) entry.flag = 'limit';
};
checkExpenses();

const logBigExpenses = function (bigLimit) {
  let output = '';
  for (const entry of budget) {
    entry.value <= -bigLimit
      ? (output += `${entry.description.slice(-2)} / `)
      : '';
  }
  output = output.slice(0, -2);

  // const result = budget
  //   .filter(el => el.value <= -bigLimit)
  //   .map(el => el.description.slice(-2))
  //   .join(' / ');
  // console.log(result);
};

logBigExpenses(100);
