'use strict'
const getForcast = function (temps) {
  let outputStr = '';
  for (let index = 0; index < temps.length; index++) {
    const currentTemp = temps[index];
    outputStr += `... ${ currentTemp }C in ${ index + 1 } days `;
  }
  outputStr += `...`;
  return outputStr;
}
const arr = [100, 105, 102, 103];
console.log(getForcast(arr));