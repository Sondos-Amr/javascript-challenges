'use strict';

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(
    function (position) {
      const { latitude, longitude } = position.coords;
      const coords = [latitude, longitude];

      const map = L.map('map').setView(coords, 13);

      L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);

      L.marker(coords)
        .addTo(map)
        .bindPopup('A pretty CSS popup.<br> Easily customizable.')
        .openPopup();
      map.on('click', function (eventMap) {
        console.log(eventMap);
        const { lat, lng } = eventMap.latlng;
        L.marker([lat, lng])
          .addTo(map)
          .bindPopup(
            L.popup({
              maxWidth: 250,
              minWidth: 100,
              autoClose: false,
              closeOnClick: false,
              className: 'running-popup',
            })
          )
          .setPopupContent('Workout')
          .openPopup();
      });
    },
    function () {
      alert('Could not get your position');
    }
  );
}
// const form = document.querySelector('.form');
// const containerWorkouts = document.querySelector('.workouts');
// const inputType = document.querySelector('.form__input--type');
// const inputDistance = document.querySelector('.form__input--distance');
// const inputDuration = document.querySelector('.form__input--duration');
// const inputCadence = document.querySelector('.form__input--cadence');
// const inputElevation = document.querySelector('.form__input--elevation');

// // Using the Geolocation API

// // Displaying a Map Using Leaflet Library
// // let map, mapEvent;
// // if (navigator.geolocation) {
// //   navigator.geolocation.getCurrentPosition(
// //     function (position) {
// //       const { latitude, longitude } = position.coords;
// //       const coords = [latitude, longitude];

// //       map = L.map('map').setView(coords, 13);

// //       L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
// //         attribution:
// //           '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
// //       }).addTo(map);

// //       map.on('click', function (mapE) {
// //         mapEvent = mapE;
// //         form.classList.remove('hidden');
// //         inputDistance.focus();
// //       });
// //     },
// //     function () {
// //       alert('Could not get your position');
// //     }
// //   );
// // }

// // form.addEventListener('submit', function (e) {
// //   e.preventDefault();

// //   inputCadence.value =
// //     inputDistance.value =
// //     inputDuration.value =
// //     inputElevation.value =
// //       '';

// //   const { lat, lng } = mapEvent.latlng;
// //   L.marker([lat, lng])
// //     .addTo(map)
// //     .bindPopup(
// //       L.popup({
// //         maxWidth: 250,
// //         minWidth: 100,
// //         autoClose: false,
// //         closeOnClick: false,
// //         className: 'running-popup',
// //       })
// //     )
// //     .setPopupContent('Workout')
// //     .openPopup();
// // });

// // inputType.addEventListener('change', function () {
// //   inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
// //   inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
// // });

// // Refactoring for Project Architecture

// class Workout {
//   date = new Date();
//   id = crypto.randomUUID();

//   constructor(coords, distance, duration) {
//     this.coords = coords;
//     this.distance = distance;
//     this.duration = duration;
//   }
//   _setDescription() {
//     // prettier-ignore

//     const months = [
//       'January',
//       'February',
//       'March',
//       'April',
//       'May',
//       'June',
//       'July',
//       'August',
//       'September',
//       'October',
//       'November',
//       'December',
//     ];
//   }
// }
// class Running extends Workout {
//   constructor(coords, distance, duration, cadence) {
//     super(coords, distance, duration);
//     this.cadence = cadence;
//     this.calcPace();
//   }
//   calcPace() {
//     this.pace = this.duration / this.distance;
//     return this.pace;
//   }
// }
// class Cycling extends Workout {
//   constructor(coords, distance, duration, elevation) {
//     super(coords, distance, duration);
//     this.elevation = elevation;
//     this.calcSpeed();
//   }
//   calcSpeed() {
//     this.speed = this.distance / (this.duration / 60);
//     return this.speed;
//   }
// }

// // const run1 = new Running([39, -12], 5.2, 24, 178);
// // const cycl1 = new Cycling([39, -12], 27, 95, 523);
// // console.log(run1, cycl1);

// class App {
//   #map;
//   #mapEvent;
//   #workouts = [];
//   constructor() {
//     this._getPosition();
//     form.addEventListener('submit', this._newWorkout.bind(this));

//     inputType.addEventListener('change', this._toggleElevationField);
//   }

//   _getPosition() {
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(
//         this._loadMap.bind(this),
//         function () {
//           alert('Could not get your position');
//         }
//       );
//     }
//   }
//   _loadMap(position) {
//     const { latitude, longitude } = position.coords;
//     const coords = [latitude, longitude];
//     this.#map = L.map('map').setView(coords, 13);

//     L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
//       attribution:
//         '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
//     }).addTo(this.#map);

//     this.#map.on('click', this._showForm.bind(this));
//   }
//   _showForm(mapE) {
//     this.#mapEvent = mapE;
//     form.classList.remove('hidden');
//     inputDistance.focus();
//   }

//   _toggleElevationField() {
//     inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
//     inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
//   }

//   _newWorkout(e) {
//     e.preventDefault();

//     const validInputs = (...inputs) =>
//       inputs.every(input => Number.isFinite(input));

//     const allPositive = (...inputs) => inputs.every(input => input > 0);

//     const type = inputType.value;
//     const distance = +inputDistance.value;
//     const duration = +inputDuration.value;
//     const { lat, lng } = this.#mapEvent.latlng;

//     let workout;

//     if (type === 'running') {
//       const cadence = +inputCadence.value;
//       if (
//         // !Number.isFinite(distance) &&
//         // !Number.isFinite(duration) &&
//         // !Number.isFinity(cadence)

//         !validInputs(distance, duration, cadence) &&
//         !allPositive(distance, duration, cadence)
//       )
//         return alert('Inputs have to be positive numbers!');

//       workout = new Running([lat, lng], distance, duration, cadence);
//     }
//     if (type === 'cycling') {
//       const elevation = +inputElevation.value;
//       if (
//         !validInputs(distance, duration, elevation) &&
//         !allPositive(distance, duration, elevation)
//       )
//         return alert('Inputs have to be positive numbers!');
//       workout = new Cycling([lat, lng], distance, duration, elevation);
//     }

//     this.#workouts.push(workout);
//     console.log('workout :  ', workout);

//     this.renderWorkoutMarker(workout);
//     inputCadence.value =
//       inputDistance.value =
//       inputDuration.value =
//       inputElevation.value =
//         '';
//   }
//   renderWorkoutMarker(workout) {
//     L.marker(workout.coords)
//       .addTo(this.#map)
//       .bindPopup(
//         L.popup({
//           maxWidth: 250,
//           minWidth: 100,
//           autoClose: false,
//           closeOnClick: false,
//           className: `${type}-popup`,
//         })
//       )
//       .setPopupContent(workout.type)
//       .openPopup();
//   }
//   _renderWorkout(workout) {
//     const html = `
//       <li class="workout workout--${workout.name}" data-id="${workout.id}">
//             <h2 class="workout__title">Running on April 14</h2>
//             <div class="workout__details">
//               <span class="workout__icon">${
//                 workout.name === 'running' ? '🏃‍♂️' : '🚴‍♀️'
//               }</span>
//               <span class="workout__value">${workout.distance}</span>
//               <span class="workout__unit">km</span>
//             </div>
//             <div class="workout__details">
//               <span class="workout__icon">⏱</span>
//               <span class="workout__value">${workout.duration}</span>
//               <span class="workout__unit">min</span>
//             </div>
//     `;
//   }
// }

// const app = new App();

// // Managing Workout Data: Creating Classes

// // if (navigator.geolocation) {
// //   navigator.geolocation.getCurrentPosition(
// //     function (position) {
// //       const { latitude, longitude } = position.coords;

// //       console.log('My real location:', latitude, longitude);

// //       const coords = [latitude, longitude];

// //       const map = L.map('map').setView(coords, 13);

// //       L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
// //         attribution:
// //           '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
// //       }).addTo(map);

// //       map.on('click', function (mapEvent) {
// //         form.classList.remove('hidden');
// //         inputDistance.foucs();
// //         console.log(mapEvent);
// //         const { lat, lng } = mapEvent.latlng;
// //         const title = prompt('enter your event!');
// //         console.log('You clicked here:', lat, lng);
// //         L.marker([lat, lng])
// //           .addTo(map)
// //           .bindPopup(title || 'Workout')
// //           .openPopup();
// //       });
// //     },
// //     function () {
// //       alert('could not access your location');
// //     }
// //   );
// // }

// class Workout {
//   #date = new Date();
//   #id = crypto.randomUUID();
//   constructor(coords, distance, duration) {
//     this.coords = coords;
//     this.distance = distance;
//     this.duration = duration;
//   }
// }

// class Running extends Workout {
//   constructor(coords, distance, duration, cadence) {
//     super(coords, distance, duration);
//     this.cadence = cadence;
//   }
// }

// class Cycling extends Workout {
//   constructor(coords, distance, duration, elevation) {
//     super(coords, distance, duration);
//     this.elevation = elevation;
//   }
// }

// class App {
//   #map;
//   #mapE;
//   #dataWorkouts = [];
//   constructor() {
//     this._getPosition();
//     form.addEventListener('submit', this._newWorkout.bind(this));
//   }
//   _getPosition() {
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(
//         this._loadMap.bind(this),
//         function () {
//           alert('Could not get your position!!');
//         }
//       );
//     }
//   }
//   _loadMap(position) {
//     // give curr coords
//     const { latitude, longitude } = position.coords;
//     const coords = [latitude, longitude];

//     this.#map = L.map('map').setView(coords, 13);

//     L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
//       attribution:
//         '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
//     }).addTo(this.#map);

//     L.marker(coords).addTo(this.#map).bindPopup('workout').openPopup();
//     this._showForm();
//   }

//   _showForm() {
//     this.#map.on('click', function (mapEvent) {
//       const { lat, lng } = mapEvent.latlng;
//       console.log(lat, lng);
//       this.#mapE = mapEvent;
//       form.classList.remove('hidden');
//       inputDistance.focus();
//     });
//   }
//   _newWorkout(e) {
//     e.preventDefault();

//     // validation

//     const validInputs = (...inputs) =>
//       inputs.every(input => Number.isFinite(input));
//     const allPositive = (...inputs) => inputs.every(input => input > 0);
//     const type = inputType.value;
//     const distance = +inputDistance.value;
//     const duration = +inputDuration.value;

//     if (type === 'running') {
//       const cadence = +inputCadence.value;
//       if (
//         !validInputs(distance, duration, cadence) ||
//         !allPositive(distance, duration, cadence)
//       )
//         return alert('your data are not valid!');
//       const { lat, lng } = this.#mapE.latlng;
//       const running = new Running([lat, lng], distance, duration, cadence);
//       this.#dataWorkouts.push(running);
//     }

//     if (type === 'cycling') {
//       const elevation = +inputElevation.value;
//       if (
//         !validInputs(distance, duration, elevation) ||
//         !allPositive(distance, duration, elevation)
//       )
//         return alert('your data are not valid!');
//       const { lat, lng } = this.#mapE.latlng;
//       const cycling = new Cycling([lat, lng], distance, duration, elevation);
//       this.#dataWorkouts.push(cycling);
//     }
//   }
//   _renderWorkoutMarker() {
//     const { lat, lng } = this.#mapE.latlng;
//     this.#map.marker([lat, lng]).addTo(this.#map).bindPopup(this.#map({}));
//   }
// }

// const app = new App();
