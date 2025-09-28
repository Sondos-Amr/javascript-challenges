'use strict';

function Person(name, birthYear) {
  this.myName = name;
  this.myBirthYear = birthYear;
  // bad way :
  // this.calcAge = function(){
  //   console.log(2025 - this.myBirthYear)
  // }
}

const p1 = new Person('Sondos', 2001);
console.log(Person);
console.log('==============');
console.log(p1);
console.log('==============');
const p2 = new Person('Abrar', 2014);
console.log(p2);

console.log(p1 instanceof Person);

const p3 = 'hi';
console.log(p3 instanceof Person);
