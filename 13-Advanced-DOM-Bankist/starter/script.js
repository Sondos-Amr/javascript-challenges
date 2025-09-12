'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const header = document.querySelector('.header');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabs = document.querySelectorAll('.operations__tab');
const tabsContent = document.querySelectorAll('.operations__content');
const nav = document.querySelector('.nav');
const navLinks = document.querySelector('.nav__links');

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

// console.log(message.style.color);
// console.log(getComputedStyle(message));

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
// const navLinks2 = document.querySelectorAll('.nav__link');
// navLinks2.forEach(el => {
//   el.addEventListener('click', function (e) {
//     e.preventDefault();
//     const id = this.getAttribute('href');
//     document.querySelector(id).scrollIntoView({
//       behavior: 'smooth',
//     });
//   });
// });

// Case 2

navLinks.addEventListener('click', function (e) {
  e.preventDefault();
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({
      behavior: 'smooth',
    });
  }
});

// // Dom Traversing:

// // Going downwards: child
// console.log(
//   [...h1.querySelectorAll('.highlight')].forEach((ele, i) => {
//     ele.style.backgroundColor = 'red';
//   })
// );
// console.log(h1.childNodes);
// console.log(h1.children);

// h1.firstElementChild.style.color = 'blue';
// h1.lastElementChild.style.color = 'gray';

// // Going upwards: parents
// console.log(h1.parentNode);
// console.log(h1.parentElement);

// h1.closest('.header').style.backgroundColor = 'yellow';

// // Going sideways: siblings
// console.log(h1.previousElementSibling);
// console.log(h1.nextElementSibling);

// console.log(h1.previousSibling);
// console.log(h1.nextSibling);

// console.log(h1.parentElement.children);
// [...h1.parentElement.children].forEach(ele => {
//   if (ele !== h1) ele.style.transform = 'scale(0.5)';
// });

// // Tabbed component

// const tabs = document.querySelectorAll('.operations__tab');
// const tabsContainer = document.querySelector('.operations__tab-container');
// const tabsContent = document.querySelectorAll('.operations__content');

// // tabs.forEach(t => {
// //   t.addEventListener('click', e => {
// //     e.preventDefault();
// //     console.log('test');
// //   });
// // });

// tabsContainer.addEventListener('click', function (e) {
//   const clicked = e.target.closest('.operations__tab');
//   // console.log(clicked);
//   if (!clicked) return;

//   tabs.forEach(t => t.classList.remove('operations__tab--active'));
//   clicked.classList.add('operations__tab--active');

//   tabsContent.forEach(c => c.classList.remove('operations__content--active'));
//   const currentContent = document.querySelector(
//     `.operations__content--${clicked.dataset.tab}`
//   );

//   currentContent.classList.add('operations__content--active');
// });

tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab');
  console.log(clicked);
  if (!clicked) return;

  tabs.forEach(t => t.classList.remove('operations__tab--active'));
  clicked.classList.add('operations__tab--active');

  tabsContent.forEach(c => c.classList.remove('operations__content--active'));

  let tabNumber = clicked.dataset.tab;
  console.log(tabNumber);
  const currentContent = document.querySelector(
    `.operations__content--${tabNumber}`
  );
  currentContent.classList.add('operations__content--active');
});

///////
// navLinks.addEventListener('mousrover', function (e) {
//   const hovered = e.target.closest('.nav__links');
//   console.log(hovered);
// });

// const handleHover = function (hoverType, opacity) {
//   nav.addEventListener(hoverType, function (e) {
//     const clicked = e.target;
//     if (clicked.classList.contains('nav__link')) {
//       const siblings = clicked.closest('.nav').querySelectorAll('.nav__link');
//       const logo = clicked.closest('.nav').querySelector('img');
//       siblings.forEach(link => {
//         if (link !== clicked) link.style.opacity = opacity;
//       });
//       logo.style.opacity = opacity;
//     }
//   });
// };
// handleHover('mouseover', 0.5);
// handleHover('mouseout', 1);

// nav.addEventListener('mouseover', function (e) {
//   const clicked = e.target;
//   if (clicked.classList.contains('nav__link')) {
//     const siblings = clicked.closest('.nav').querySelectorAll('.nav__link');
//     const logo = clicked.closest('.nav').querySelector('img');

//     siblings.forEach(link => {
//       if (link !== clicked) link.style.opacity = '0.5';
//     });
//     logo.style.opacity = '0.5';
//   }
// });

// nav.addEventListener('mouseout', function (e) {
//   const clicked = e.target;
//   if (clicked.classList.contains('nav__link')) {
//     const siblings = clicked.closest('.nav').querySelectorAll('.nav__link');
//     const logo = clicked.closest('.nav').querySelector('img');
//     siblings.forEach(link => {
//       if (link !== clicked) link.style.opacity = '1';
//     });
//     logo.style.opacity = '1';
//   }
// });

const handleHover = function (e) {
  const clicked = e.target;
  if (clicked.classList.contains('nav__link')) {
    const links = clicked.closest('.nav').querySelectorAll('.nav__link');
    const logo = clicked.closest('.nav').querySelector('img');
    links.forEach(link => {
      if (link !== clicked) link.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};
nav.addEventListener('mouseover', handleHover.bind(0.5));
nav.addEventListener('mouseout', handleHover.bind(1));

// sticky navigation

/* ======= case 1 ======= */

// window.addEventListener('scroll', function () {
//   console.log(window.scrollY);
//   if (window.scrollY > 0) {
//     nav.classList.add('sticky');
//   } else nav.classList.remove('sticky');
// });

/* ======= case 2 ======= */

// const initialCoords = section1.getBoundingClientRect();
// console.log(initialCoords);

// window.addEventListener('scroll', function () {
//   if (window.scrollY > initialCoords.top) {
//     nav.classList.add('sticky');
//   } else {
//     nav.classList.remove('sticky');
//   }
// });

/* ======= case 3 // the best // ======= */
// const obsCallback = function (entries, obserbver) {
//   entries.forEach(entry => {
//     console.log('=======', entry, '=======');
//   });
// };
// const obsOptions = {
//   root: null,
//   threshold: 0.1,
// };
// const observer = new IntersectionObserver(obsCallback, obsOptions);
// observer.observe(section1);

// const navHeight = nav.getBoundingClientRect().height;

// const stickyNav = function (entries) {
//   const [entry] = entries;
//   if (!entry.isIntersectiong) nav.className.add('sticky');
//   else nav.classList.remove('sticky');
// };

// const observe = new IntersectionObserver(section1, {
//   root: null,
//   threshold: 0.1,
//   rootMargin: `-${navHeight}px`,
// });

// observe.observe(section1);

// const obsCallback = function (entries, observer) {
//   entries.forEach(entrey => {
//     console.log(entrey);
//   });
// };
// const options = {
//   root: null,
//   threshold: 0.1,
// };
// const observer = new IntersectionObserver(obsCallback, options);
// observer.observe(section1);

const navHeight = nav.getBoundingClientRect().height;
const stickyNav = function (entries) {
  const [entrey] = entries;
  console.log(entrey);

  if (!entrey.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
};
const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});

headerObserver.observe(header);
