'use strict';
const greet = greeting => (name => console.log(`${ greeting } ${ name }`));
greet('Hello')('world!');
const addTax = rate => value => value * (1 + rate);
const addVAT = addTax(.23);
console.log(addVAT(100));
console.log(addVAT(23));