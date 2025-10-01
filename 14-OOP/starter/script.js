'use strict';

// function Person(fullName, birthYear) {
//   this.myfullName = fullName;
//   this.myBirthYear = birthYear;
//   // bad way :
//   // this.calcAge = function(){
//   //   console.log(2025 - this.myBirthYear)
//   // }
// }

// const p1 = new Person('Sondos', 2001);
// console.log(Person);
// console.log('==============');
// console.log(p1);
// console.log('==============');
// const p2 = new Person('Abrar', 2014);
// console.log(p2);

// console.log(p1 instanceof Person);

// const p3 = 'hi';
// console.log(p3 instanceof Person);

// Prototype

// console.log(Person.prototype);

// Person.prototype.calcAge = function () {
//   return 2025 - this.myBirthYear;
// };

// console.log(Person.prototype);

// const p4 = new Person('Sondos', 2020);
// console.log(p4);
// console.log(p4.calcAge());
// console.log(p1.calcAge());
// console.log(p2.calcAge());

// console.log(p1.__proto__);
// console.log(p1.__proto__ === Person.prototype);

// console.log('==============');

// console.log(Person.prototype.isPrototypeOf(p1));
// console.log(Person.prototype.isPrototypeOf(p2));
// console.log(Person.prototype.isPrototypeOf(p3));
// console.log(Person.prototype.isPrototypeOf(p4));

// Person.prototype.city = 'Cairo';

// console.log(p1);
// console.log(p1.city);

// console.log(p1.hasOwnProperty('myfullName'));
// console.log(p1.hasOwnProperty('city'));

// // Object.Prototype
// console.log(p1.__proto__.__proto__);
// console.log(p1.__proto__.__proto__.__proto__);

// console.dir(Person.prototype.constructor);

// const arr = [4, 55, 5, 55, 88, 3, 4, 88];
// console.log(arr.__proto__);
// console.log(arr.__proto__ === Array.prototype);

// console.log(arr.__proto__.__proto__);

// Array.prototype.unique = function () {
//   return [...new Set(this)];
// };

// console.log(arr.unique());

// const h1 = document.querySelector('h1');
// console.dir(x => x + 1);

// Challenge 1 :
/* 
1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;

2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console; 

3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console; 

4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them. 

DATA CAR 1: 'BMW' going at 120 km/h DATA CAR 2: 'Mercedes' going at 95 km/h GOOD LUCK 😀 
*/

// console.log('==========  Challenge 1  ==========');

// function Car(make, speed) {
//   this.make = make;
//   this.speed = speed;
// }

// Car.prototype.accelerate = function () {
//   this.speed += 10;
//   console.log(`${this.make} Speed: ${this.speed} km/h`);
// };
// Car.prototype.brake = function () {
//   this.speed -= 5;
//   console.log(`${this.make} Speed: ${this.speed} km/h`);
// };

// const car1 = new Car('BMW', 120);
// car1.accelerate();
// car1.brake();

// const car2 = new Car('Mercedes', 95);
// car2.accelerate();
// car2.brake();

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
      alert(`${name}is not a full name!`);
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

// Object.create

const PersonProto = {
  set fullName(name) {
    console.log(`hi , ${name}`);
  },
  calcAge() {
    console.log(2025 - this.birthYear);
  },
  init(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  },
};

const abrar = Object.create(PersonProto);
abrar.name = 'Abrar Amr';
abrar.birthYear = 2014;

abrar.calcAge();

const bila = Object.create(PersonProto);

bila.init('Bila', 1999);
bila.calcAge();

const bro = Object.create(PersonProto);
bro.init('Abderhaman', 1989);
bro.fullName;
bro.calcAge();

///////////////////////////////////////
// Coding Challenge #2

/* 
1. Re-create challenge 1, but this time using an ES6 class;
2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide by 1.6);
3. Add a setter called 'speedUS' which sets the current speed in mi/h (but converts it to km/h before storing the value, by multiplying the input by 1.6);
4. Create a new car and experiment with the accelerate and brake methods, and with the getter and setter.

DATA CAR 1: 'Ford' going at 120 km/h

GOOD LUCK 😀
*/

class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }
  accelerate() {
    this.speed += 10;
    console.log(`${this.make} Speed: ${this.speed} km/h`);
  }
  brake() {
    this.speed -= 5;
    console.log(`${this.make} Speed: ${this.speed} km/h`);
  }
  get speedUS() {
    return this.speed / 1.6;
  }
  set speedUS(value) {
    this.speed = value * 1.6;
  }
}

const ford = new CarCl('Ford', 120);
console.log(ford.speedUS);
ford.accelerate();
ford.brake();
ford.speedUS = 50;
console.log(ford);

// Inheritance Between "Classes": Constructor Functions

const Person = function (fistName, birthYear) {
  this.fistName = fistName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2025 - this.birthYear);
};

const p1 = new Person('sondos', 2002);

p1.calcAge();

const Student = function (fistName, birthYear, study) {
  Person.call(this, fistName, birthYear);
  this.study = study;
};
// Linking prototypes
Student.prototype = Object.create(Person.prototype);
Student.prototype.intrduce = function () {
  console.log(`My Name is ${this.fistName} and I study in ${this.study}`);
};
const student1 = new Student('Abrar', 2014, 'High School');

student1.intrduce();
student1.calcAge();
console.log(student1.__proto__.__proto__ === Person.prototype);

///////////////////////////////////////
// Coding Challenge #3

/* 
1. Use a constructor function to implement an Electric Car (called EV) as a CHILD "class" of Car. Besides a make and current speed, the EV also has the current battery charge in % ('charge' property);
2. Implement a 'chargeBattery' method which takes an argument 'chargeTo' and sets the battery charge to 'chargeTo';
3. Implement an 'accelerate' method that will increase the car's speed by 20, and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140 km/h, with a charge of 22%';
4. Create an electric car object and experiment with calling 'accelerate', 'brake' and 'chargeBattery' (charge to 90%). Notice what happens when you 'accelerate'! HINT: Review the definiton of polymorphism 😉

DATA CAR 1: 'Tesla' going at 120 km/h, with a charge of 23%

GOOD LUCK 😀
*/

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} Speed: ${this.speed} km/h`);
};

Car.prototype.brake = function () {
  this.speed -= 15;
  console.log(`${this.make} Speed: ${this.speed} km/h`);
};

const bm = new Car('BMW', 120);
bm.accelerate();
bm.brake();

const EV = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};

EV.prototype = Object.create(Car.prototype);
EV.prototype.constructor = EV;

EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};

EV.prototype.accelerate = function () {
  this.speed += 20;
  this.charge--;
  console.log(
    `${this.make} going at ${this.speed} km/h, with a charge of ${this.charge}%`
  );
};

const childCar = new EV('Tesla', 120, 23);

childCar.accelerate();
childCar.chargeBattery(90);
childCar.brake();

// Inheritance Between "Classes": ES6 Classes

class StudentCl extends PersonCl {
  constructor(fullName, birthYear, study) {
    super(fullName, birthYear);
    this.study = study;
  }
  intrduce() {
    console.log(`My name is ${this._fullName} and I study ${this.study}`);
  }
  calcAge() {
    console.log(
      `I am ${
        2025 - this.birthYear
      } years old , but as a student i feel more like ${
        2025 - this.birthYear + 10
      }`
    );
  }
}

const ali = new StudentCl('Ali mo', 1990, 'cs');

ali.intrduce();
ali.calcAge();

// Inheritance Between "Classes": Object.create
const PersonProto2 = {
  calcAge() {
    console.log(2025 - this.birthYear);
  },
  init(fistName, birthYear) {
    this.fistName = fistName;
    this.birthYear = birthYear;
  },
};

const p11 = Object.create(PersonProto2);

p11.init = function (fistName, birthYear, study) {
  PersonProto2.init.call(this, fistName, birthYear);
  this.study = study;
};
p11.stdying = function () {
  console.log(`study in ${this.study}`);
};
p11.init('sondos amr', 2002, 'cs');
p11.stdying();

const p12 = Object.create(p11);

p12.init('Abrar Amr', 2020, 'student');
p12.stdying();
