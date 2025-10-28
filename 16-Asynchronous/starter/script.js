'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

// NEW COUNTRIES API URL (use instead of the URL shown in videos):
// https://restcountries.com/v2/name/portugal

// NEW REVERSE GEOCODING API URL (use instead of the URL shown in videos):
// https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}

///////////////////////////////////////
// const renderCounter = function (data, className = '') {
//   const html = `
//   <article class="country ${className}">
//               <img class="country__img" src="${data.flag}" />
//               <div class="country__data">
//                   <h3 class="country__name">${data.name}</h3>
//                   <h4 class="country__region">${data.region}</h4>
//                   <p class="country__row"><span>👫</span>${(
//                     +data.population / 1000000
//                   ).toFixed(1)}</p>
//                   <p class="country__row"><span>🗣️</span>${
//                     data.languages[0].name
//                   }</p>
//                   <p class="country__row"><span>💰</span>${
//                     data.currencies[0].name
//                   }</p>
//               </div>
//         </article>
//   `;
//   countriesContainer.insertAdjacentHTML('beforeend', html);
//   countriesContainer.style.opacity = 1;
// };
// const getCountries = function (country) {
//   const request1 = new XMLHttpRequest();
//   request1.open('GET', `https://restcountries.com/v2/name/${country}`);
//   request1.send();

//   request1.addEventListener('load', function () {
//     const [dataResponse1] = JSON.parse(this.responseText);
//     console.log(dataResponse1);
//     renderCounter(dataResponse1);

//     const neighbourCode = dataResponse1.borders[2];
//     if (!neighbourCode) return;
//     const request2 = new XMLHttpRequest();
//     request2.open('GET', `https://restcountries.com/v2/alpha/${neighbourCode}`);
//     request2.send();
//     request2.addEventListener('load', function () {
//       const dataResponse2 = JSON.parse(this.responseText);
//       renderCounter(dataResponse2, 'neighbour');
//     });
//   });
// };
// getCountries('egypt');
// getCountries('palestine');

// setTimeout(() => {
//   console.log('1 second passed');
//   setTimeout(() => {
//     console.log('2 second passed');
//     setTimeout(() => {
//       console.log('3 second passed');
//     }, 1000);
//   }, 1000);
// }, 1000);

// Promises

// const request = fetch(`https://restcountries.com/v2/name/egypt`);
// console.log(request);

const renderCounter = function (data, className = '') {
  const html = `
  <article class="country ${className}">
              <img class="country__img" src="${data.flag}" />
              <div class="country__data">
                  <h3 class="country__name">${data.name}</h3>
                  <h4 class="country__region">${data.region}</h4>
                  <p class="country__row"><span>👫</span>${(
                    +data.population / 1000000
                  ).toFixed(1)}</p>
                  <p class="country__row"><span>🗣️</span>${
                    data.languages[0].name
                  }</p>
                  <p class="country__row"><span>💰</span>${
                    data.currencies[0].name
                  }</p>
              </div>
        </article>
  `;
  countriesContainer.insertAdjacentHTML('beforeend', html);
};

// Handling Rejected Promises
const renderError = function (message) {
  btn.addEventListener('click', function () {
    countriesContainer.insertAdjacentText('beforeend', message);
  });
};

// Consuming Promises

const getCountryData = function (country) {
  fetch(`https://restcountries.com/v2/name/${country}`)
    .then(response => response.json())
    .then(data => {
      renderCounter(data[0]);

      // Chaining Promises
      const neighbour = data[0].borders?.[1];
      return fetch(`https://restcountries.com/v2/alpha/${neighbour}`);
    })
    .then(response => response.json())
    .then(data => renderCounter(data, 'neighbour'))
    .catch(err => {
      console.error(err, '🚨🚨🚨');
      renderError(`Something went wrong 🚨🚨🚨 ${err.message} Try again!`);
    })
    .finally(() => (countriesContainer.style.opacity = 1));
};
btn.addEventListener('click', function () {
  getCountryData('egypt');
});
