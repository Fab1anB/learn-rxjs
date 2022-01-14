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

let expensesDatabase = [
  {
    title: "Walmart",
    date: new Date(),
    amount: 66,
    type: "food",
  },
  {
    title: "Beer",
    date: addDays(new Date(), 2),
    amount: 23,
    type: "drink",
  },
  {
    title: "TV",
    date: new Date(),
    amount: 444,
    type: "equipment",
  },
  {
    title: "Toothbrush",
    date: addDays(new Date(), 3),
    amount: 3,
    type: "care",
  },
  {
    title: "Pizza",
    date: addDays(new Date(), -1),
    amount: 13,
    type: "food",
  },
  // Month -1
  {
    title: "ALDI",
    date: addMonths(addDays(new Date(), 10), -1),
    amount: 27.45,
    type: "food",
  },
  {
    title: "Beer",
    date: addMonths(addDays(new Date(), 7), -1),
    amount: 21.12,
    type: "drink",
  },
  {
    title: "iPhone",
    date: addMonths(addDays(new Date(), -2), -1),
    amount: 1300,
    type: "equipment",
  },
  {
    title: "Cream",
    date: addMonths(new Date(), -1),
    amount: 12.99,
    type: "care",
  },
  {
    title: "Spaghetti",
    date: addMonths(new Date(), -1),
    amount: 11.5,
    type: "food",
  },
  // Month +2
  {
    title: "Donuts",
    date: addMonths(addDays(new Date(), 11), 2),
    amount: 27.45,
    type: "food",
  },
  {
    title: "Limo",
    date: addMonths(addDays(new Date(), 9), 2),
    amount: 21.12,
    type: "drink",
  },
  {
    title: "MacBook",
    date: addMonths(addDays(new Date(), 2), 2),
    amount: 1300,
    type: "equipment",
  },
  {
    title: "Laundry detergent",
    date: addMonths(new Date(), 3),
    amount: 12.99,
    type: "care",
  },
  {
    title: "Shellfisch",
    date: addMonths(new Date(), 2),
    amount: 11.5,
    type: "food",
  },
];

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
    `RxJS earning dashboard app listening at http://localhost:${port}`
  );
});
