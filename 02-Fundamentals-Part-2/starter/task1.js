const jonas = {
  firstName: 'jonas',
  lastName: 'Schedtmann',
  birthYear: 1991,
  job: 'teacher',
  friends: ['Michael', 'Peter', 'Stevan'],
  hasDriversLiscense: false,
  calcAge: function () {
    this.age = new Date().getFullYear() - this.birthYear;
    return this.age;
  },
  getInfo: function () {
    if (!this.age && this.age !== 0) {
      this.calcAge();
    }
    return `${ this.firstName } is a ${ this.age }-year old ${ this.job }, and he has ${ this.hasDriversLiscense ? 'a' : 'no' } driver's liscense`
  }
}
// console.log(jonas.age);
console.log(jonas.getInfo());