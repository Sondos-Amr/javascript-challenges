'use strict';

function Person(fullName, birthYear) {
  this.myfullName = fullName;
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

console.log(p1.hasOwnProperty('myfullName'));
console.log(p1.hasOwnProperty('city'));

// Object.Prototype
console.log(p1.__proto__.__proto__);
console.log(p1.__proto__.__proto__.__proto__);

console.dir(Person.prototype.constructor);

const arr = [4, 55, 5, 55, 88, 3, 4, 88];
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);

console.log(arr.__proto__.__proto__);

Array.prototype.unique = function () {
  return [...new Set(this)];
};

console.log(arr.unique());

const h1 = document.querySelector('h1');
console.dir(x => x + 1);

// Challenge 1 :
/* 
1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;

2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console; 

3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console; 

4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them. 

DATA CAR 1: 'BMW' going at 120 km/h DATA CAR 2: 'Mercedes' going at 95 km/h GOOD LUCK 😀 
*/

console.log('==========  Challenge 1  ==========');

function Car(make, speed) {
  this.make = make;
  this.speed = speed;
}

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} Speed: ${this.speed} km/h`);
};
Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} Speed: ${this.speed} km/h`);
};

const car1 = new Car('BMW', 120);
car1.accelerate();
car1.brake();

const car2 = new Car('Mercedes', 95);
car2.accelerate();
car2.brake();

// ES6 Classes

class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }
  calcAge() {
    console.log(2025 - this.birthYear);
  }
  get greet() {
    console.log(`HI ${this.fullName}`);
  }
  set fullName(name) {
    if (name.includes(' ')) {
      this._fullName = name;
    } else {
      alert(`${name} is not a full name!`);
    }
  }
  get fullName() {
    return this._fullName;
  }
  // Static Methods
  static hey(name) {
    console.log(`Hey ${name}`);
  }
}

// PersonCl.prototype.greet = function () {
//   console.log(`HI ${this.fullName}`);
// };

const sondos = new PersonCl('Sondos Amr', 2002);

sondos.calcAge();
sondos.greet;

PersonCl.hey('Abrar');

// Setters and Getters

const account = {
  owner: 'Sondos',
  movments: [400, 58, 87, 36],
  get latest() {
    return this.movments.slice(-1).pop();
  },
  set movment(mov) {
    this.movments.push(mov);
  },
};
console.log(account.latest);
account.movment = 50;
console.log(account.movments);
