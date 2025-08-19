'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const header = document.querySelector('.header');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

//////////////////////////
// console.log('test');
// console.log(document);
// console.log(document.documentElement);
// const allBtn = document.querySelectorAll('.section');
// console.log([...allBtn]);
// console.log(Array.from(allBtn));
// const b1 = [...allBtn];
// const b2 = Array.from(allBtn);
// console.log(b1 == b2); // false
// console.log(JSON.stringify(b1) === JSON.stringify(b2)); // true

////////
// add message before header

const message = document.createElement('div');
message.classList.add('cookie-message');

message.innerHTML = `We use cookied for improved functionality and analytics.<button class="btn btn--close-cookie">Got it!</button>`;

header.before(message);

const btnCloseCookie = document.querySelector('.btn--close-cookie');

btnCloseCookie.addEventListener('click', function () {
  message.remove();
});

/// Style

message.style.backgroundColor = '#37383d';

console.log(message.style.color);
console.log(getComputedStyle(message));

message.style.height =
  Number.parseFloat(getComputedStyle(message).height) + 30 + 'px';

document.documentElement.style.setProperty('--color-primary', 'orangered');

// scroll
const section1 = document.querySelector('#section--1');

const btnScrollTo = document.querySelector('.btn--scroll-to');

btnScrollTo.addEventListener('click', function () {
  section1.scrollIntoView({
    behavior: 'smooth',
  });
});

const h1 = document.querySelector('h1');
// h1.addEventListener('mouseenter', function () {
//   alert('test');
// });

// h1.onmouseenter = function () {
//   alert('test');
// };
h1.onclick = function () {
  alert('test');
};

//// Event Propagation in Practice

// const randomInt = (min, max) =>
//   Math.floor(Math.random() * (max - min + 1)) + min;

// const randomColor = (min, max) =>
//   `rgb(${randomInt(min, max)} , ${randomInt(min, max)} , ${randomInt(
//     min,
//     max
//   )})`;

// console.log(randomColor(0, 255));

// const navLink = document.querySelector('.nav__link');
// navLink.addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor(0, 255);
//   console.log(` navLink ${e.target} : curr ${e.currentTarget}`);
//   e.stopPropagation();
// });

// const navLinks = document.querySelector('.nav__links');
// navLinks.addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor(0, 255);
//   console.log(`navLinks ${e.target} : curr ${e.currentTarget}`);
// });

// const nav = document.querySelector('.nav');
// nav.addEventListener(
//   'click',
//   function (e) {
//     this.style.backgroundColor = randomColor(0, 255);

//     console.log(`nav ${e.target} : curr ${e.currentTarget}`);
//     console.log(e.currentTarget === this);
//   },
//   true
// );

////////////////////
// Page navigation

// Case 1
const navLinks2 = document.querySelectorAll('.nav__link');
navLinks2.forEach(el => {
  el.addEventListener('click', function (e) {
    e.preventDefault();
    const id = this.getAttribute('href');
    document.querySelector(id).scrollIntoView({
      behavior: 'smooth',
    });
  });
});
