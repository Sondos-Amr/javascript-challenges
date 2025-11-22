const budget = [
  { value: 250, description: 'Sold old TV 📺', user: 'jonas' },
  { value: -45, description: 'Groceries 🥑', user: 'jonas' },
  { value: 3500, description: 'Monthly salary 👩‍💻', user: 'jonas' },
  { value: 300, description: 'Freelancing 👩‍💻', user: 'jonas' },
  { value: -1100, description: 'New iPhone 📱', user: 'jonas' },
  { value: -20, description: 'Candy 🍭', user: 'matilda' },
  { value: -125, description: 'Toys 🚂', user: 'matilda' },
  { value: -1800, description: 'New Laptop 💻', user: 'jonas' },
];

const spendingLimits = {
  jonas: 1500,
  matilda: 100,
};
const limit = ele => spendingLimits?.[ele.user] ?? 0;
const addExpense = function (value, description, user = 'jonas') {
  user = user.toLowerCase();
  if (value <= limit(user)) {
    budget.push({
      value: -value,
      description,
      user,
    });
  }
};
addExpense(10, 'Pizza 🍕');
addExpense(100, 'Going to movies 🍿', 'Matilda');
addExpense(200, 'Stuff', 'Jay');
console.log(budget);

const checkExpenses = function () {
  // budget.forEach(ele =>
  //   ele.value < -limit(ele) ? (ele.flag = 'limit') : null
  // );

  // for (const entry of budget)
  //   entry.value <= -limit(entry) ? (entry.flag = 'limit') : null;

  for (const entry of budget)
    if (entry.value <= -limit(entry)) entry.flag = 'limit';
};
checkExpenses();

console.log(budget);

const logBigExpenses = function (bigLimit) {
  let output = '';
  for (const entry of budget) {
    entry.value <= -bigLimit
      ? (output += `${entry.description.slice(-2)} / `)
      : '';
  }
  output = output.slice(0, -2);
  console.log(output);

  // const result = budget
  //   .filter(el => el.value <= -bigLimit)
  //   .map(el => el.description.slice(-2))
  //   .join(' / ');
  // console.log(result);
};

logBigExpenses(100);
