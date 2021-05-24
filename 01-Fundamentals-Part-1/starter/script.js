const bill = 275;
console.log(`tip is ${ (bill <= 300 && bill >= 50) ? .15 * bill : .2 * bill }`);