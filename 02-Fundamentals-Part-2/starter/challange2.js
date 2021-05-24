"use strict";
const bills = [123, 555, 44];
const tips = [];
const total_bills = [];
bills.forEach(bill => {
  const tip = (bill >= 50 && bill <= 300) ? bill * .15 : bill * .2;
  tips.push(tip);
  total_bills.push(tip + bill);
});
console.log(bills, tips, total_bills);

