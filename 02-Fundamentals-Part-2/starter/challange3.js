const person1 = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    return this.bmi ? this.bmi : (this.bmi = this.mass / (this.height ** 2));
  }
}
const person2 = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    return this.bmi ? this.bmi : (this.bmi = this.mass / (this.height ** 2));
  }
}
// console.log(typeof typeof person1.bmi);
const person1BMIHigher = person1.calcBMI() > person2.calcBMI();
let greaterBMIPerson, smallerBMIPerson;
if (person1BMIHigher) {
  greaterBMIPerson = person1;
  smallerBMIPerson = person2;
} else {
  greaterBMIPerson = person2;
  smallerBMIPerson = person1;
}
console.log(`${ greaterBMIPerson.fullName }'s BMI (${ greaterBMIPerson.calcBMI() }) is higher than ${ smallerBMIPerson.fullName }'s BMI (${ smallerBMIPerson.calcBMI() })`);
