const express = require("express");
const app = express();
const port = 3000;

function addDays(date, days) {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}

function addMonths(date, month) {
  const result = new Date(date);
  result.setMonth(result.getMonth() + month);
  return result;
}

app.get("/status", (req, res) => {
  res.send("online");
});

// shares live values

app.get("/shares-live", (req, res) => {
  const sharesLiveValuesDatabase = [
    {
      share: "Apple",
      wkn: "865985",
      value: +(120 + 30 * Math.random()).toFixed(2),
      icon: "apple",
    },
    {
      share: "Bitcoin",
      wkn: "BTC",
      value: +(15000 + 4_000 * Math.random()).toFixed(2),
      icon: "btc",
    },
    {
      share: "Tesla",
      wkn: "A1CX3T",
      value: +(900 + 150 * Math.random()).toFixed(2),
      icon: "tesla",
    },
    {
      share: "Microsoft",
      wkn: "870747",
      value: +(200 + 30 * Math.random()).toFixed(2),
      icon: "microsoft",
    },
    {
      share: "Facebook",
      wkn: "A1JWVX",
      value: +(300 + 20 * Math.random()).toFixed(2),
      icon: "facebook",
    },
  ];

  res.send(sharesLiveValuesDatabase);
});

// share profits
let shareProfitDatabase = { type: "Share profits", value: 200 };

app.get("/share-profits", (req, res) => {
  shareProfitDatabase = {
    ...shareProfitDatabase,
    value: shareProfitDatabase.value + (100 * Math.random()).toFixed(2),
  };

  res.send(shareProfitDatabase);
});

// profits

const profitsDatabase = [
  {
    type: "Salary",
    value: 4500,
    account: "Bank Account",
    icon: "bank-account",
  },
  { type: "Freelance services", value: 505, account: "PayPal", icon: "paypal" },
];

app.get("/profits", (req, res) => {
  res.send(profitsDatabase);
});

// expenses

function generateExpense(title, month, maxAmount, type, date) {
  return {
    title: title,
    month,
    amount: +((maxAmount / 4 + (Math.random() * maxAmount)).toFixed(0)),
    type,
    date,
  };
}

const expenseTypes = [
  { title: "Pasta", type: "food", maxAmount: 15 },
  { title: "Walmart", type: "food", maxAmount: 150 },
  { title: "Pizza", type: "food", maxAmount: 15 },
  { title: "Donuts", type: "food", maxAmount: 10 },
  { title: "Beer", type: "drink", maxAmount: 20 },
  { title: "Water", type: "drink", maxAmount: 10 },
  { title: "Soda", type: "drink", maxAmount: 15 },
  { title: "Cola", type: "drink", maxAmount: 15 },
  { title: "TV", type: "equipment", maxAmount: 1000 },
  { title: "iPhone", type: "equipment", maxAmount: 1300 },
  { title: "MacBook", type: "equipment", maxAmount: 4000 },
  { title: "Tablet", type: "equipment", maxAmount: 200 },
  { title: "Toothbrush", type: "care", maxAmount: 10 },
  { title: "Cream", type: "care", maxAmount: 20 },
  { title: "Shampoo", type: "care", maxAmount: 4 },
  { title: "Deo", type: "care", maxAmount: 5 },
];

function generateExpenseForMonth(month) {
  return Array(8)
    .fill("")
    .map(() => {
      const randomDay = +(Math.random() * 27).toFixed(0) + 1;
      const date = new Date(new Date().setDate(randomDay)).setMonth(month);
      const index = +Math.abs(Math.random() * expenseTypes.length - 1).toFixed(
        0
      );
      const { title, type, maxAmount } = expenseTypes[index];
      return generateExpense(title, month, maxAmount, type, date);
    });
}
let i = 0;
let expensesDatabase = Array(12)
  .fill("")
  .map(() => i++)
  .flatMap((month) => generateExpenseForMonth(month));

app.get("/expenses", (req, res) => {
  res.send(expensesDatabase);
});

app.post("/expenses", (req, res) => {
  expensesDatabase.push(req.body);
  res.send(req.body);
});

app.delete("/expenses", (req, res) => {
  expensesDatabase = expensesDatabase.filter(
    (expense) => expense.title !== req.body.title
  );
  res.send(200);
});

app.listen(port, () => {
  console.log(
    `RxJS learning dashboard app listening at http://localhost:${port}`
  );
});
