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

// Prototype

console.log(Person.prototype);

Person.prototype.calcAge = function () {
  return 2025 - this.myBirthYear;
};

console.log(Person.prototype);

const p4 = new Person('Sondos', 2020);
console.log(p4);
console.log(p4.calcAge());
console.log(p1.calcAge());
console.log(p2.calcAge());

console.log(p1.__proto__);
console.log(p1.__proto__ === Person.prototype);

console.log('==============');

console.log(Person.prototype.isPrototypeOf(p1));
console.log(Person.prototype.isPrototypeOf(p2));
console.log(Person.prototype.isPrototypeOf(p3));
console.log(Person.prototype.isPrototypeOf(p4));

Person.prototype.city = 'Cairo';

console.log(p1);
console.log(p1.city);

console.log(p1.hasOwnProperty('myName'));
console.log(p1.hasOwnProperty('city'));
