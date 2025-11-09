'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

/*
// NEW COUNTRIES API URL (use instead of the URL shown in videos):
// https://restcountries.com/v2/name/portugal

// NEW REVERSE GEOCODING API URL (use instead of the URL shown in videos):
// https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}

///////////////////////////////////////
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
  countriesContainer.style.opacity = 1;
};

const getCountries = function (country) {
  const request1 = new XMLHttpRequest();
  request1.open('GET', `https://restcountries.com/v2/name/${country}`);
  request1.send();

  request1.addEventListener('load', function () {
    const [dataResponse1] = JSON.parse(this.responseText);
    console.log(dataResponse1);
    renderCounter(dataResponse1);

    const neighbourCode = dataResponse1.borders[2];
    if (!neighbourCode) return;
    const request2 = new XMLHttpRequest();
    request2.open('GET', `https://restcountries.com/v2/alpha/${neighbourCode}`);
    request2.send();
    request2.addEventListener('load', function () {
      const dataResponse2 = JSON.parse(this.responseText);
      renderCounter(dataResponse2, 'neighbour');
    });
  });
};
getCountries('egypt');
getCountries('palestine');

setTimeout(() => {
  console.log('1 second passed');
  setTimeout(() => {
    console.log('2 second passed');
    setTimeout(() => {
      console.log('3 second passed');
    }, 1000);
  }, 1000);
}, 1000);

// Promises

const request = fetch(`https://restcountries.com/v2/name/egypt`);
console.log(request);

const renderCounter2 = function (data, className = '') {
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
  countriesContainer.insertAdjacentText('beforeend', message);
};

// Consuming Promises

const getCountryData = function (country) {
  fetch(`https://restcountries.com/v2/name/${country}`)
    .then(response => {
      if (!response.ok) throw new Error(`Country not found ${response.status}`);
      return response.json();
    })
    .then(data => {
      renderCounter2(data[0]);
      // Chaining Promises
      const neighbour = data[0].borders?.[1];
      return fetch(`https://restcountries.com/v2/alpha/${neighbour}`);
    })
    .then(response => {
      if (!response.ok) throw new Error(`Country not found ${response.status}`);
      return response.json();
    })
    .then(data => renderCounter2(data, 'neighbour'))
    .catch(err => {
      console.error(err, '🚨🚨🚨');
      renderError(`Something went wrong 🚨🚨🚨 ${err.message} Try again!`);
    })
    .finally(() => (countriesContainer.style.opacity = 1));
};
btn.addEventListener('click', function () {
  getCountryData('eypt');
});

const getJSON = function (url) {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(`Country not found ${response.status}`);
    return response.json();
  });
};
const getCountryData2 = function (country) {
  getJSON(`https://restcountries.com/v2/name/${country}`)
    .then(data => {
      renderCounter2(data[0]);
      // Chaining Promises
      const neighbour = data[0].borders?.[1];
      if (!neighbour) throw new Error(`No neighbour found!`);
      return getJSON(`https://restcountries.com/v2/alpha/${neighbour}`);
    })
    .then(data => renderCounter2(data, 'neighbour'))
    .catch(err => {
      console.error(err, '🚨🚨🚨');
      renderError(`Something went wrong 🚨🚨🚨 ${err.message} Try again!`);
    })
    .finally(() => (countriesContainer.style.opacity = 1));
};
btn.addEventListener('click', function () {
  getCountryData2('eypt');
});

*/

///////////////////////////////////////
// Coding Challenge #1

/* 
In this challenge you will build a function 'whereAmI' which renders a country ONLY based on GPS coordinates. For that, you will use a second API to geocode coordinates.

Here are your tasks:

PART 1
1. Create a function 'whereAmI' which takes as inputs a latitude value (lat) and a longitude value (lng) (these are GPS coordinates, examples are below).
2. Do 'reverse geocoding' of the provided coordinates. Reverse geocoding means to convert coordinates to a meaningful location, like a city and country name. Use this API to do reverse geocoding: https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}.
The AJAX call will be done to a URL with this format: https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=52.508&longitude=13.381. Use the fetch API and promises to get the data. Do NOT use the getJSON function we created, that is cheating 😉
3. Once you have the data, take a look at it in the console to see all the attributes that you recieved about the provided location. Then, using this data, log a messsage like this to the console: 'You are in Berlin, Germany'
4. Chain a .catch method to the end of the promise chain and log errors to the console
5. This API allows you to make only 3 requests per second. If you reload fast, you will get this error with code 403. This is an error with the request. Remember, fetch() does NOT reject the promise in this case. So create an error to reject the promise yourself, with a meaningful error message.

PART 2
6. Now it's time to use the received data to render a country. So take the relevant attribute from the geocoding API result, and plug it into the countries API that we have been using.
7. Render the country and catch any errors, just like we have done in the last lecture (you can even copy this code, no need to type the same code)

TEST COORDINATES 1: 52.508, 13.381 (Latitude, Longitude)
TEST COORDINATES 2: 19.037, 72.873
TEST COORDINATES 2: -33.933, 18.474

GOOD LUCK 😀
*/
/*
const getJSON = function (url) {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(`Country not found! ${response.status} `);
    return response.json();
  });
};
const showEle = function () {
  countriesContainer.style.opacity = 1;
};
const renderCounter = function (data, className = '') {
  const html = `
  <article class="country ${className}">
              <img class="country__img" src="${data.flags.png}" />
              <div class="country__data">
                  <h3 class="country__name">${
                    data.currencies
                      ? Object.values(data.currencies)[0].name
                      : 'No data'
                  }</h3>
                  <h4 class="country__region">${data.continents[0]}</h4>
                  <p class="country__row"><span>👫</span>${(
                    +data.population / 1000000
                  ).toFixed(1)}</p>
                  <p class="country__row"><span>🗣️</span>${
                    Object.values(data.languages)[0]
                  }</p>
                  <p class="country__row"><span>💰</span>${
                    data.currencies.EUR.name
                  }</p>
              </div>
        </article>
  `;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  showEle();
};

const renderError = function (error) {
  countriesContainer.insertAdjacentText('beforeend', error);
  showEle();
};

const whereAmI = function (lat, lng) {
  getJSON(
    `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}`
  )
    .then(data => {
      console.log(`You are in ${data.city}, ${data.countryName}`);
      const country = data.countryName;
      if (!country) throw new Error(`No country found!`);
      return getJSON(`https://restcountries.com/v3.1/name/${country}`);
    })
    .then(data => {
      const [dataCountry] = data;
      console.log(dataCountry);
      if (!dataCountry) throw new Error(`No data found!`);

      renderCounter(dataCountry);
    })
    .catch(error => {
      renderError(`Something went wrong 🚨🚨🚨 ${error.message} Try again!`);
    });
};
btn.addEventListener('click', function () {
  whereAmI(52.508, 13.381);
  whereAmI(19.037, 72.873);
  whereAmI(-33.933, 18.474);
});
*/
// The Event Loop in Practice

// console.log('start');
// setTimeout(() => console.log('0 second thimer'), 0);
// Promise.resolve('Resolved promise 1').then(response => console.log(response));

// Promise.resolve('Resolves promise 2').then(res => {
//   for (let i = 0; i < 1000000; i++) {}
//   console.log(res);
// });
// console.log('end');

//  Building a Simple Promise

// way 1

// const lotteryPromise = new Promise(function (resolve, reject) {
//   if (Math.random() >= 0.5) resolve('You WIN 😉🎉🎉👏👏');
//   else reject('You lost your money 😢');
// })
//   .then(res => console.log(res))
//   .catch(err => console.log(err));

// lotteryPromise();

// way 2
/*
const lotteryPromise = new Promise(function (resolve, reject) {
  console.log('Lotter draw is happening 🙌');
  setTimeout(function () {
    if (Math.random() >= 0.5) resolve('You WIN 😉🎉🎉👏👏');
    else reject(new Error('You lost your money 😢'));
  }, 2000);
});

lotteryPromise.then(res => console.log(res)).catch(err => console.log(err));
*/
// Promisifying setTimeout

// const wait = function () {};

// Promisifying the Geolocation API

// console.log('Getting position');

// const getPosition = function () {
//   return new Promise(function (resolve, reject) {
//     navigator.geolocation.getCurrentPosition(resolve, reject);
//   });
// };

// getPosition().then(pos => console.log(pos));

/////
/*
const getJSON = function (url) {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(`Country not found! ${response.status} `);
    return response.json();
  });
};
const showEle = function () {
  countriesContainer.style.opacity = 1;
};
const renderCounter = function (data, className = '') {
  const html = `
  <article class="country ${className}">
              <img class="country__img" src="${data.flags.png}" />
              <div class="country__data">
                  <h3 class="country__name">${
                    data.currencies
                      ? Object.values(data.currencies)[0].name
                      : 'No data'
                  }</h3>
                  <h4 class="country__region">${data.continents[0]}</h4>
                  <p class="country__row"><span>👫</span>${(
                    +data.population / 1000000
                  ).toFixed(1)}</p>
                  <p class="country__row"><span>🗣️</span>${
                    Object.values(data.languages)[0]
                  }</p>
                  <p class="country__row"><span>💰</span>${
                    data.currencies.EUR.name
                  }</p>
              </div>
        </article>
  `;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  showEle();
};

const renderError = function (error) {
  countriesContainer.insertAdjacentText('beforeend', error);
  showEle();
};

const whereAmI = function () {
  getPosition()
    .then(pos => {
      const { latitude, longitude } = pos.coords;
      return getJSON(
        `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}`
      );
    })
    .then(data => {
      console.log(`You are in ${data.city}, ${data.countryName}`);
      const country = data.countryName;
      if (!country) throw new Error(`No country found!`);
      return getJSON(`https://restcountries.com/v3.1/name/${country}`);
    })
    .then(data => {
      const [dataCountry] = data;
      console.log(dataCountry);
      if (!dataCountry) throw new Error(`No data found!`);

      renderCounter(dataCountry);
    })
    .catch(error => {
      renderError(`Something went wrong 🚨🚨🚨 ${error.message} Try again!`);
    });
};

btn.addEventListener('click', whereAmI);
*/
///////////////////////////////////////
// Coding Challenge #2

/* 
Build the image loading functionality that I just showed you on the screen.

Tasks are not super-descriptive this time, so that you can figure out some stuff on your own. Pretend you're working on your own 😉

PART 1
1. Create a function 'createImage' which receives imgPath as an input. This function returns a promise which creates a new image (use document.createElement('img')) and sets the .src attribute to the provided image path. When the image is done loading, append it to the DOM element with the 'images' class, and resolve the promise. The fulfilled value should be the image element itself. In case there is an error loading the image ('error' event), reject the promise.

If this part is too tricky for you, just watch the first part of the solution.

PART 2
2. Comsume the promise using .then and also add an error handler;
3. After the image has loaded, pause execution for 2 seconds using the wait function we created earlier;
4. After the 2 seconds have passed, hide the current image (set display to 'none'), and load a second image (HINT: Use the image element returned by the createImage promise to hide the current image. You will need a global variable for that 😉);
5. After the second image has loaded, pause execution for 2 seconds again;
6. After the 2 seconds have passed, hide the current image.

TEST DATA: Images in the img folder. Test the error handler by passing a wrong image path. Set the network speed to 'Fast 3G' in the dev tools Network tab, otherwise images load too fast.

GOOD LUCK 😀
*/

// Wait function
// const wait = function (second) {
//   return new Promise(function (resolve) {
//     setTimeout(resolve, second * 1000);
//   });
// };

// // Create image Promise
// const createImg = function (imgPath) {
//   return new Promise(function (resolve, reject) {
//     const img = document.createElement('img');
//     img.src = imgPath;

//     img.addEventListener('load', function () {
//       resolve(img);
//     });

//     img.addEventListener('error', function () {
//       reject(new Error(`Image not found: ${imgPath}`));
//     });
//   });
// };

// // Display image
// const displayImg = function (img) {
//   const imgContainer = document.querySelector('.images');
//   imgContainer.insertAdjacentElement('beforeend', img);
//   return img;
// };

// // Button click - load image sequence
// btn.addEventListener('click', function () {
//   createImg('img/img-1.jpg')
//     .then(res => displayImg(res))
//     .then(img =>
//       wait(2).then(() => {
//         img.style.display = 'none';
//         return createImg('img/img-2.jpg');
//       })
//     )
//     .then(img2 => displayImg(img2))
//     .then(img2 =>
//       wait(2).then(() => {
//         img2.style.display = 'none';
//         return createImg('img/img-3.jpg');
//       })
//     )
//     .then(img3 => displayImg(img3))
//     .then(img3 =>
//       wait(2).then(() => {
//         img3.style.display = 'none';
//       })
//     )
//     .catch(err => console.log(err));
// });

const wait = function (second) {
  return new Promise(resolve => setTimeout(resolve, second * 1000));
};
const imgContainer = document.querySelector('.images');
const createImg = function (imgPath) {
  return new Promise(function (resolve, reject) {
    const img = document.createElement('img');
    img.src = imgPath;

    img.addEventListener('load', function () {
      imgContainer.append(img);
      resolve(img);
    });

    img.addEventListener('error', function () {
      reject(new Error(`Image not found: ${imgPath}`));
    });
  });
};

btn.addEventListener('click', function () {
  createImg(`img/img-1.jpg`)
    .then(img => {
      return wait(2).then(() => {
        img.style.display = 'none';
        return createImg(`img/img-2.jpg`);
      });
    })
    .then(img => {
      return wait(2).then(() => {
        img.style.display = 'none';
        return createImg(`img/img-3.jpg`);
      });
    })
    .then(img => {
      return wait(2).then(() => {
        img.style.display = 'none';
      });
    })
    .catch(err => console.error(err));
});
