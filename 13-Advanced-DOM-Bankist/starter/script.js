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

