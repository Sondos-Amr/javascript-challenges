'use strict';

// Data needed for a later exercise
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// const italianFoods = new Set([
//   'pasta',
//   'gnocchi',
//   'tomatoes',
//   'olive oil',
//   'garlic',
//   'basil',
// ]);

// const mexicanFoods = new Set([
//   'tortillas',
//   'beans',
//   'rice',
//   'tomatoes',
//   'avocado',
//   'garlic',
// ]);

// // Data needed for first part of the section
// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],

//   openingHours: {
//     thu: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0, // Open 24 hours
//       close: 24,
//     },
//   },
// };

//  benefits of destructuring array

// const colors = ['red', 'green', 'blue'];
// const g = colors[1];
// const b = colors[2];
// const r = colors[0];

// const [ , , b] = colors;

// console.log(g);
// console.log(b);
// console.log(r);

// 1. Shorter Syntax
// const colors = ['red', 'green', 'blue'];
// const first = colors[0];
// const second = colors[1];
// const [first, second] = colors;

// 2. Improves Readability
// const [x, y] = [10, 20];
// // Easy to read: x is 10, y is 20

// 3. Skip Unwanted Values
// const numbers = [1, 2, 3, 4];
// const [ , , third] = numbers;

// console.log(third); // 3

// 4. Default Values
// const [a = 5, b = 10] = [1];
// console.log(a); // 1
// console.log(b); // 10 (default)

// 5. Easier in Function Arguments

// case 1 :
// function showUserInfo(user) {
//   console.log("Name:", user[0]);
//   console.log("Age:", user[1]);
//   console.log("Country:", user[2]);
// }

// const user = ["Ali", 25, "Egypt"];
// showUserInfo(user);

// case 2 :
// function showUserInfo([name, age, country]) {
//   console.log('Name:', name);
//   console.log('Age:', age);
//   console.log('Country:', country);
// }

// const user = ['Ali', 25, 'Egypt'];
// showUserInfo(user);

// 5. switching Values

// case 1
// let a = 5;
// let b = 10;

// let x = a;
// a = b;
// b = x;

// let temp = a;
// a = b;
// b = temp;

// console.log(a); // 10
// console.log(b); // 5

// case 2
// let a = 5;
// let b = 10;
// destructuring array

// [a, b] = [b, a];
// console.log(a, b);

// console.log(a); // 10
// console.log(b); // 5

// // Step 1: Create the restaurant object
// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],

//   // Step 2: Create a method to order food
//   order(starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },
// };

// // Step 3: Use the method and destructuring
// const [starter, mainCourse] = restaurant.order(2, 0);

// // Step 4: Print the results
// console.log("Starter:", starter);       // Garlic Bread
// console.log("Main Course:", mainCourse); // Pizza

// nested array

// simple example

// const nested = [2, 4, [6, 8]];
// const [, , [, d]] = nested;
// console.log(d);

// const [x, , [, z]] = nested;
// console.log(x, z);

// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],

//   // Method that returns an array with nested values
//   order: function (starterIndex, mainIndex) {
//     return [
//       this.starterMenu[starterIndex],
//       this.mainMenu[mainIndex],
//       ['coffe', 'Water'], // Nested array
//     ];
//   },
// };

// const [, , g] = restaurant.starterMenu;
// console.log(g);

// // Destructuring nested array
// const [starter, mainCourse, [drink1, drink2]] = restaurant.order(1, 2);

// console.log(starter);
// console.log(mainCourse);
// console.log(drink1, drink2);

// #Assignments :

// we have 1 array it name is " book" include 8 objects every obj include a lot of data like : arrays , objects and functions .. etc
// these are the assaginments : Destructuring Arrays

// these data :

// const books = [
//   {
//     title: 'Algorithms',
//     author: ['Robert Sedgewick', 'Kevin Wayne'],
//     publisher: 'Addison-Wesley Professional',
//     publicationDate: '2011-03-24',
//     edition: 4,
//     keywords: [
//       'computer science',
//       'programming',
//       'algorithms',
//       'data structures',
//       'java',
//       'math',
//       'software',
//       'engineering',
//     ],
//     pages: 976,
//     format: 'hardcover',
//     ISBN: '9780321573513',
//     language: 'English',
//     programmingLanguage: 'Java',
//     onlineContent: true,
//     thirdParty: {
//       goodreads: {
//         rating: 4.41,
//         ratingsCount: 1733,
//         reviewsCount: 63,
//         fiveStarRatingCount: 976,
//         oneStarRatingCount: 13,
//       },
//     },
//     highlighted: true,
//   },
//   {
//     title: 'Structure and Interpretation of Computer Programs',
//     author: [
//       'Harold Abelson',
//       'Gerald Jay Sussman',
//       'Julie Sussman (Contributor)',
//     ],
//     publisher: 'The MIT Press',
//     publicationDate: '2022-04-12',
//     edition: 2,
//     keywords: [
//       'computer science',
//       'programming',
//       'javascript',
//       'software',
//       'engineering',
//     ],
//     pages: 640,
//     format: 'paperback',
//     ISBN: '9780262543231',
//     language: 'English',
//     programmingLanguage: 'JavaScript',
//     onlineContent: false,
//     thirdParty: {
//       goodreads: {
//         rating: 4.36,
//         ratingsCount: 14,
//         reviewsCount: 3,
//         fiveStarRatingCount: 8,
//         oneStarRatingCount: 0,
//       },
//     },
//     highlighted: true,
//   },
//   {
//     title: "Computer Systems: A Programmer's Perspective",
//     author: ['Randal E. Bryant', "David Richard O'Hallaron"],
//     publisher: 'Prentice Hall',
//     publicationDate: '2002-01-01',
//     edition: 1,
//     keywords: [
//       'computer science',
//       'computer systems',
//       'programming',
//       'software',
//       'C',
//       'engineering',
//     ],
//     pages: 978,
//     format: 'hardcover',
//     ISBN: '9780130340740',
//     language: 'English',
//     programmingLanguage: 'C',
//     onlineContent: false,
//     thirdParty: {
//       goodreads: {
//         rating: 4.44,
//         ratingsCount: 1010,
//         reviewsCount: 57,
//         fiveStarRatingCount: 638,
//         oneStarRatingCount: 16,
//       },
//     },
//     highlighted: true,
//   },
//   {
//     title: 'Operating System Concepts',
//     author: ['Abraham Silberschatz', 'Peter B. Galvin', 'Greg Gagne'],
//     publisher: 'John Wiley & Sons',
//     publicationDate: '2004-12-14',
//     edition: 10,
//     keywords: [
//       'computer science',
//       'operating systems',
//       'programming',
//       'software',
//       'C',
//       'Java',
//       'engineering',
//     ],
//     pages: 921,
//     format: 'hardcover',
//     ISBN: '9780471694663',
//     language: 'English',
//     programmingLanguage: 'C, Java',
//     onlineContent: false,
//     thirdParty: {
//       goodreads: {
//         rating: 3.9,
//         ratingsCount: 2131,
//         reviewsCount: 114,
//         fiveStarRatingCount: 728,
//         oneStarRatingCount: 65,
//       },
//     },
//   },
//   {
//     title: 'Engineering Mathematics',
//     author: ['K.A. Stroud', 'Dexter J. Booth'],
//     publisher: 'Palgrave',
//     publicationDate: '2007-01-01',
//     edition: 14,
//     keywords: ['mathematics', 'engineering'],
//     pages: 1288,
//     format: 'paperback',
//     ISBN: '9781403942463',
//     language: 'English',
//     programmingLanguage: null,
//     onlineContent: true,
//     thirdParty: {
//       goodreads: {
//         rating: 4.35,
//         ratingsCount: 370,
//         reviewsCount: 18,
//         fiveStarRatingCount: 211,
//         oneStarRatingCount: 6,
//       },
//     },
//     highlighted: true,
//   },
//   {
//     title: 'The Personal MBA: Master the Art of Business',
//     author: 'Josh Kaufman',
//     publisher: 'Portfolio',
//     publicationDate: '2010-12-30',
//     keywords: ['business'],
//     pages: 416,
//     format: 'hardcover',
//     ISBN: '9781591843528',
//     language: 'English',
//     thirdParty: {
//       goodreads: {
//         rating: 4.11,
//         ratingsCount: 40119,
//         reviewsCount: 1351,
//         fiveStarRatingCount: 18033,
//         oneStarRatingCount: 1090,
//       },
//     },
//   },
//   {
//     title: 'Crafting Interpreters',
//     author: 'Robert Nystrom',
//     publisher: 'Genever Benning',
//     publicationDate: '2021-07-28',
//     keywords: [
//       'computer science',
//       'compilers',
//       'engineering',
//       'interpreters',
//       'software',
//       'engineering',
//     ],
//     pages: 865,
//     format: 'paperback',
//     ISBN: '9780990582939',
//     language: 'English',
//     thirdParty: {
//       goodreads: {
//         rating: 4.7,
//         ratingsCount: 253,
//         reviewsCount: 23,
//         fiveStarRatingCount: 193,
//         oneStarRatingCount: 0,
//       },
//     },
//   },
//   {
//     title: 'Deep Work: Rules for Focused Success in a Distracted World',
//     author: 'Cal Newport',
//     publisher: 'Grand Central Publishing',
//     publicationDate: '2016-01-05',
//     edition: 1,
//     keywords: ['work', 'focus', 'personal development', 'business'],
//     pages: 296,
//     format: 'hardcover',
//     ISBN: '9781455586691',
//     language: 'English',
//     thirdParty: {
//       goodreads: {
//         rating: 4.19,
//         ratingsCount: 144584,
//         reviewsCount: 11598,
//         fiveStarRatingCount: 63405,
//         oneStarRatingCount: 1808,
//       },
//     },
//     highlighted: true,
//   },
// ];

// 1.1

// Destructure the books array into two variables called firstBook and secondBook.

// const [b1, b2] = books;
// console.log(b1, b2);

// 1.2

// Destructure the books array into a variable called thirdBook. You must skip the first two books.

// const [, , thiredBook] = books;
// console.log(thiredBook);

// 1.3

// Below is the nested ratings array that contains two other arrays. Destructure the nested ratings arrays into two variables called rating and ratingsCount. In the result of your destructuring, the ratings variable should store a number 4.19, and the ratingsCount variable should store a number 144584.
// const ratings = [
//   ['rating', 4.19],
//   ['ratingsCount', 144584],
// ];
// let [a, b], ([d, c] = ratings);
// const [[, rating], [, ratingsCount]] = ratings;
// console.log(rating, ratingsCount);

// 1.4

// Below is the ratingStars array. Destructure it into three variables called fiveStarRatings, oneStarRatings and threeStarRatings. Assign the threeStarRatings variable with a default value of 0.
// const ratingStars = [63405, 1808];

// const [fiveStarRatings, oneStarRatings, threeStarRatings = 0] = ratingStars;

// console.log(fiveStarRatings, oneStarRatings, threeStarRatings);

// obj destructuring assiments

// 2.1

// Destructure the first book object from the books array into variables called title, author and ISBN.

// const { title, author, ISBN } = books[0];
// console.log(title, author, ISBN);

// 2.2

// Each book object has the keywords property. Destructure the first book object from the books array into a variable called tags. The tags variable should be assigned with the value of the keywords property.

// const { keywords: tags } = books[0];
// console.log(tags);

// 2.3

// The seventh book from the books array is missing the programmingLanguage property. Destructure the seventh book object (books[6]) into variables called language and programmingLanguage. Assign the programmingLanguage variable with a default value of 'unknown'.

// const { language, programmingLanguage = 'unknown' } = books[6];
// console.log(language, programmingLanguage);
// 2.4

// Below are two variables called bookTitle and bookAuthor. Reassign them with the values of the title and author properties of the first book object from the books array.

// let bookTitle = 'unknown';
// let bookAuthor = 'unknown';
// ({ title: bookTitle, author: bookAuthor } = books[0]);
// console.log(bookTitle, bookAuthor);

// 2.5

// Each book object has a deeply nested rating property as illustrated below:

// {
//   title: 'Algorithms',
//   ...
//   thirdParty: {
//     goodreads: {
//       rating: 4.41,              // <-- HERE
//       ratingsCount: 1733,
//       reviewsCount: 63,
//       fiveStarRatingCount: 976,
//       oneStarRatingCount: 13
//     }
//   }
// },

// Destructure the first book object from the books array into a variable called bookRating. In the result of your destructuring, the bookRating variable should be assigned with the value of the book[0].thirdParty.goodreads.rating property.

// Please do most of the work on the left side of the assignment operator: const ... = books[0];

// const {
//   thirdParty: {
//     goodreads: { rating: bookRating },
//   },
// } = books[0];
// console.log(bookRating);

// deeply nested destructuring

// 2.6

// Write a function called printBookInfo that has three parameters called title, author and year. This function should work for a single object passed as an argument, and it should log to the console information about the book in this format: "${title} by ${author}, ${year}".

// If year is undefined (was not passed), it should be assigned with a default value of 'year unknown'.
// Example 1
// Example 2

// Code:

// printBookInfo({
//   title: 'Algorithms',
//   author: 'Robert Sedgewick',
//   year: '2011',
// });
// function printBookInfo({ title, author, year = 'unknown' }) {
//   console.log(`${title} by ${author}, ${year}`);
// }

/* u are the best soso 😌 */
// Expected output:

// "Algorithms by Robert Sedgewick, 2011"

// spread operator

// challenges

// 3.1

// Each book object has the author property, which stores an array of strings (author names) if there are multiple authors, or a single string (author name) if there is just one author.

// Declare an array called bookAuthors, and fill it with authors of the first two books from the books array. The bookAuthors array should have just one level (no nested arrays).

// const bookAuthors = [...books[0].author, ...books[1].author];
// console.log(bookAuthors);

// 3.2

// Write a function called spellWord that accepts a single string as an argument. This function should log to the console each letter of the argument separated by a space.
// Example

// Code:
// function spellWord(j) {
//   console.log(j);
// }

// spellWord([...'JavaScript']);

// Expected output:

// "J a v a S c r i p t"

// rest pattern

// Rest Pattern and Parameters

// 4.1

// Destructure the keywords property (array) of the first book from the books array into variables called mainKeyword and rest. The first keyword should be assigned to mainKeyword, and the rest of the keywords should be assigned to the rest variable (it should be an array).

// const [mainKeyword, ...rest] = books[0].keywords;
// console.log(mainKeyword, rest);

// 4.2

// Destructure the second book from the books array into a variable called bookPublisher. The bookPublisher variable should be assigned with the value of the publisher property of the book object. Assign the rest of the properties to the restOfTheBook variable.

// const { publisher: bookPublisher, ...restOfTheBook } = books[1];
// console.log(bookPublisher, restOfTheBook);

// 4.3

// Write a function called printBookAuthorsCount that has two parameters called title and authors. The authors parameter should accept any number of arguments. This function should log to the console a string formatted like that: "The book "${title}" has ${authors.length} authors".
// Example

// Code:

// function printBookAuthorsCount(title, ...author) {
//   console.log(`the book ${title} ${author.length} authors`);
// }

// printBookAuthorsCount('Algorithms', 'Robert Sedgewick', 'Kevin Wayne');

// Expected output:

// "The book "Algorithms" has 2 authors"

// assignment for-of loop in araay

8.1;
// Use the for-of loop to loop over the books array and sum the pages of all books. Use the pageSum variable below, and the pages property of the book objects.

// let pageSum = 0;
// for (const ele of books) [(pageSum += ele.pages)];
// console.log(pageSum);

// 8.2

// Below is the allAuthors variable which stores an empty array. Use the for-of loop to fill allAuthors with the authors of each book from the books array.

// Remember that each book object has the author property, which can be a string (if there is only a single author) or an array (if there are multiple authors). You may need to use the typeof operator. You can also use multiple loops if needed. The allAuthors array should have just one level (no nested arrays).

// let allAuthors = [];
// for (const ele of books) {
//   if (typeof ele.author === 'string') {
//     allAuthors = [...allAuthors, ele.author];
//   } else {
//     allAuthors = [...allAuthors, ...ele.author];
//   }
// }
// console.log(allAuthors);

// 8.3

// Use the for-of loop together with Array's entries() method to log each author from allAuthors to the console together with its index. Make the index start from 1, instead of 0.
// Expected output

// 1. Robert Sedgewick
// 2. Kevin Wayne
// 3. Harold Abelson
//    ...                    // part removed for clarity
// 15. Cal Newport

// for (const [index, author] of allAuthors.entries()) {
//   console.log(` ${index + 1}. ${author}`);
// }

// Enhanced Object Literals
// 9.1

// Below is the bookData array that contains other arrays. Each inner array consists of the property name (first element), and the value (second element). For example, in ['title', 'Computer Networking: A Top-Down Approach'], 'title' is the property name, and 'Computer Networking: A Top-Down Approach' is meant to be the value assigned to that property name.

// Using computed properties, fill the newBook object with the properties and values from the bookData array. The first one is done already.

// const bookData = [
//   ['title', 'Computer Networking: A Top-Down Approach'],
//   ['author', ['James F. Kurose', 'Keith W. Ross']],
//   ['publisher', 'Addison Wesley'],
// ];

// // Do the rest
// const newBook = {
//   [bookData[0][0]]: bookData[0][1]
//   // ...
// };

// show example solution
//  {...}

// 9.2

// Below is the pages variable. Add it as a property of the newBook2 object. Use the shorter way.

// const pages = 880;

// const newBook2 = {
//   title: 'The C Programming Language',
//   author: ['Brian W. Kernighan', 'Dennis M. Ritchie'],
//   // ...
// }

// // Coding Challenge #2

// /*
// Let's continue with our football betting app!

// 1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
// 2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)

// 3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
//       Odd of victory Bayern Munich: 1.33
//       Odd of draw: 3.25
//       Odd of victory Borrussia Dortmund: 6.5
// Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

// // BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
// //       {
// //         Gnarby: 1,
// //         Hummels: 1,
// //         Lewandowski: 2
// //       }

// // GOOD LUCK 😀
// // */

// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// // Bonus :
// const scorers = {};

// for (const [i, playerName] of game.scored.entries()) {
//   // console.log(i, playerName);
//   // let score = [0, 0, 0, 0 ];
//   if (scorers[playerName]) {
//     scorers += 1;
//   }
//   scorers[playerName] = 1;
// }
// console.log(scorers);

// 1
// for (const [index, player] of game.scored.entries()) {
//   console.log(` Goal ${index + 1} :  ${player}`);
// }

// 2
// const odds = Object.values(game.odds);
// let sum = 0;
// for (const ood of odds) {
//   // console.log(ele);
//   // average = [[...average], [...ele]];
//   sum += ood;
// }

// const average = sum / odds.length;
// console.log(average);

// 3

// arr[0]
// console.log(game.odds);
// for (const [key, value] of Object.entries(game.odds)) {
//   //  Odd of victory Bayern Munich: 1.33
//   // Odd of draw: 3.25
//   const str = key === 'x' ? 'draw' : `victory ${game[key]}`;
//   // console.log(str);

//   console.log(`Odd of ${str}: ${value}`);
// }
// console.log(game.team1 === 'team1');

// let sum = 0;
// let odds = Object.values(game.odds);
// for (const x of odds) {
//   sum += x;
// }

// console.log(sum);
// let average = sum / odds.length;
// console.log(average);

// // for (const x of game.scored) {
// //   console.log(`Goal ${game.scored.findIndex(1, x, []) + 1}  ${x}`);
// // }

// // const numbers = [5, 8, 3, 12, 20];

// // const index = numbers.findIndex(num => num > 10);

// // console.log(index);

// // Output: 2 (because 12 is at index 2)

// // console.log(game.scored.indexOf());

// // console.log(game.scored.entries());
// // for of

// // for (const [index, player] of game.scored.entries()) {
// //   console.log(` Goal ${index + 1}: ${player}`);
// // }

// //  1
// // for (const [index, player] of game.scored.entries()) {
// //   console.log(`Goal ${index + 1}: ${player}`);
// // }

// // 2
// // let sum = 0;
// // for (const ele of Object.values(game.odds)) {
// //   sum += ele;
// // }

// // let average = sum / 3;
// // // let average = sum / Object.values(game.odds).length;
// // console.log(average);

// // 3

// // for (const [key, value] of Object.entries(game)) {
// //   console.log(key, value);
// // }

// // sets : collection of unique values ;

// // const sets1 = new Set('sondos'); // why spreat , it string so it can do looping
// // const sets2 = new Set(['sondos', 'amr']);
// // const sets3 = new Set('sondos', 'amr'); // why this not readed
// // const setsNum = new Set(1523); // wht is not iterable
// // // loop

// // const test = new Set(['soso', ' twolip', ' sempa']);
// // // u can't use destructuring eith sets
// // for (const [i, ele] of test) {
// //   console.log(`index ${i} : ele  ${ele}`);
// // }

// // u cant git index from sets ❌ but u have just 2 wayys ( spread operator , Array.from()) ✅

// // sets with ... spread operator ✅
// // [...test].forEach((ele, index) => {
// //   console.log(`index ${index} : ele ${ele}`);
// // });

// // // but if u looping with map u nust but it in []

// // // sets with Array.from() ✅
// // Array.from(test).forEach((ele, index) => {
// //   console.log(`index ${index} : ele ${ele}`);
// // });

// // u cant do these ❌❌❌
// // test.map(...);❌

// // // for (const [i, ele] of test) ;❌

// // // sets assignments

// const books = [
//   {
//     title: 'Algorithms',
//     author: ['Robert Sedgewick', 'Kevin Wayne'],
//     publisher: 'Addison-Wesley Professional',
//     publicationDate: '2011-03-24',
//     edition: 4,
//     keywords: [
//       'computer science',
//       'programming',
//       'algorithms',
//       'data structures',
//       'java',
//       'math',
//       'software',
//       'engineering',
//     ],
//     pages: 976,
//     format: 'hardcover',
//     ISBN: '9780321573513',
//     language: 'English',
//     programmingLanguage: 'Java',
//     onlineContent: true,
//     thirdParty: {
//       goodreads: {
//         rating: 4.41,
//         ratingsCount: 1733,
//         reviewsCount: 63,
//         fiveStarRatingCount: 976,
//         oneStarRatingCount: 13,
//       },
//     },
//     highlighted: true,
//   },
//   {
//     title: 'Structure and Interpretation of Computer Programs',
//     author: [
//       'Harold Abelson',
//       'Gerald Jay Sussman',
//       'Julie Sussman (Contributor)',
//     ],
//     publisher: 'The MIT Press',
//     publicationDate: '2022-04-12',
//     edition: 2,
//     keywords: [
//       'computer science',
//       'programming',
//       'javascript',
//       'software',
//       'engineering',
//     ],
//     pages: 640,
//     format: 'paperback',
//     ISBN: '9780262543231',
//     language: 'English',
//     programmingLanguage: 'JavaScript',
//     onlineContent: false,
//     thirdParty: {
//       goodreads: {
//         rating: 4.36,
//         ratingsCount: 14,
//         reviewsCount: 3,
//         fiveStarRatingCount: 8,
//         oneStarRatingCount: 0,
//       },
//     },
//     highlighted: true,
//   },
//   {
//     title: "Computer Systems: A Programmer's Perspective",
//     author: ['Randal E. Bryant', "David Richard O'Hallaron"],
//     publisher: 'Prentice Hall',
//     publicationDate: '2002-01-01',
//     edition: 1,
//     keywords: [
//       'computer science',
//       'computer systems',
//       'programming',
//       'software',
//       'C',
//       'engineering',
//     ],
//     pages: 978,
//     format: 'hardcover',
//     ISBN: '9780130340740',
//     language: 'English',
//     programmingLanguage: 'C',
//     onlineContent: false,
//     thirdParty: {
//       goodreads: {
//         rating: 4.44,
//         ratingsCount: 1010,
//         reviewsCount: 57,
//         fiveStarRatingCount: 638,
//         oneStarRatingCount: 16,
//       },
//     },
//     highlighted: true,
//   },
//   {
//     title: 'Operating System Concepts',
//     author: ['Abraham Silberschatz', 'Peter B. Galvin', 'Greg Gagne'],
//     publisher: 'John Wiley & Sons',
//     publicationDate: '2004-12-14',
//     edition: 10,
//     keywords: [
//       'computer science',
//       'operating systems',
//       'programming',
//       'software',
//       'C',
//       'Java',
//       'engineering',
//     ],
//     pages: 921,
//     format: 'hardcover',
//     ISBN: '9780471694663',
//     language: 'English',
//     programmingLanguage: 'C, Java',
//     onlineContent: false,
//     thirdParty: {
//       goodreads: {
//         rating: 3.9,
//         ratingsCount: 2131,
//         reviewsCount: 114,
//         fiveStarRatingCount: 728,
//         oneStarRatingCount: 65,
//       },
//     },
//   },
//   {
//     title: 'Engineering Mathematics',
//     author: ['K.A. Stroud', 'Dexter J. Booth'],
//     publisher: 'Palgrave',
//     publicationDate: '2007-01-01',
//     edition: 14,
//     keywords: ['mathematics', 'engineering'],
//     pages: 1288,
//     format: 'paperback',
//     ISBN: '9781403942463',
//     language: 'English',
//     programmingLanguage: null,
//     onlineContent: true,
//     thirdParty: {
//       goodreads: {
//         rating: 4.35,
//         ratingsCount: 370,
//         reviewsCount: 18,
//         fiveStarRatingCount: 211,
//         oneStarRatingCount: 6,
//       },
//     },
//     highlighted: true,
//   },
//   {
//     title: 'The Personal MBA: Master the Art of Business',
//     author: 'Josh Kaufman',
//     publisher: 'Portfolio',
//     publicationDate: '2010-12-30',
//     keywords: ['business'],
//     pages: 416,
//     format: 'hardcover',
//     ISBN: '9781591843528',
//     language: 'English',
//     thirdParty: {
//       goodreads: {
//         rating: 4.11,
//         ratingsCount: 40119,
//         reviewsCount: 1351,
//         fiveStarRatingCount: 18033,
//         oneStarRatingCount: 1090,
//       },
//     },
//   },
//   {
//     title: 'Crafting Interpreters',
//     author: 'Robert Nystrom',
//     publisher: 'Genever Benning',
//     publicationDate: '2021-07-28',
//     keywords: [
//       'computer science',
//       'compilers',
//       'engineering',
//       'interpreters',
//       'software',
//       'engineering',
//     ],
//     pages: 865,
//     format: 'paperback',
//     ISBN: '9780990582939',
//     language: 'English',
//     thirdParty: {
//       goodreads: {
//         rating: 4.7,
//         ratingsCount: 253,
//         reviewsCount: 23,
//         fiveStarRatingCount: 193,
//         oneStarRatingCount: 0,
//       },
//     },
//   },
//   {
//     title: 'Deep Work: Rules for Focused Success in a Distracted World',
//     author: 'Cal Newport',
//     publisher: 'Grand Central Publishing',
//     publicationDate: '2016-01-05',
//     edition: 1,
//     keywords: ['work', 'focus', 'personal development', 'business'],
//     pages: 296,
//     format: 'hardcover',
//     ISBN: '9781455586691',
//     language: 'English',
//     thirdParty: {
//       goodreads: {
//         rating: 4.19,
//         ratingsCount: 144584,
//         reviewsCount: 11598,
//         fiveStarRatingCount: 63405,
//         oneStarRatingCount: 1808,
//       },
//     },
//     highlighted: true,
//   },
// ];
// // // Sets
// // // 12.1

// // // Below is the allKeywords variable, which stores an empty array. Loop over the books array, and fill the allKeywords array with the keywords coming from the keywords property of each book object. The allKeywords array should have just one level (no nested arrays).

// // // Use whatever loop and methods you want. You can also use the spread syntax. In the end, the allKeywords array should look more or less like this: ['computer science', 'programming', 'algorithms', 'data structures', ...].

// // let allKeywords = [];
// // for (const key of books) {
// //   allKeywords = [...allKeywords, ...key.keywords];
// // }
// // console.log(allKeywords);

// // // 12.2

// // // The allKeyword array contains duplicates. Remove them by creating a Set out of that array. Assign the newly created set to the uniqueKeywords variable.

// // const uniqueKeywords = new Set(allKeywords);
// // console.log('unique keywords , ', uniqueKeywords);

// // // 12.3

// // // Add two more keywords to the uniqueKeywords set, for example, 'coding' and 'science'.

// // console.log('add : ', uniqueKeywords.add('coding', 'science'));

// // // 12.4

// // // Delete 'business' from the uniqueKeywords set.

// // console.log('delete : ', uniqueKeywords.delete('business'));
// // console.log('after delete : ', uniqueKeywords);

// // // 12.5

// // // Create an array out of the uniqueKeywords set, and assign it to the uniqueKeywordsArr variable.

// // let uniqueKeywordsArr = [];
// // uniqueKeywordsArr = [...uniqueKeywords];
// // console.log('assgin : ', uniqueKeywordsArr);

// // // 12.6

// // // Delete all items from the uniqueKeywords set.
// // uniqueKeywords.clear();
// // console.log(' clear all elements ', uniqueKeywords);

// // maps fundmantals :
// const rest = new Map();
// rest.set(1, ' sondos').set(2, ' Abrar').set(3, [8, 9, 10]);

// console.log(rest);

// // get values from maps

// console.log(rest.get(1));
// console.log(rest.get('1'));

// // Maps: Fundamentals
// // 13.1

// // Create a new book, but this time, as a Map. Assign it to the bookMap variable. Use this array as initial data:

// // [['title', 'Clean Code'], ['author', 'Robert C. Martin']]

// const bookMap = new Map();
// bookMap.set('title', ' Clear Code ').set('author', ' Robert C. Martin');

// console.log(bookMap);
// // 13.2

// // Set a new key in bookMap called pages, and assign it with a number 464.

// bookMap.set('pages', 464);
// console.log(bookMap);

// // 13.3

// // Get the title and author values from bookMap, and log to the console a string formatted like that: "${title} by ${author}".
// const title = bookMap.get('title');
// const author = bookMap.get('author');
// console.log(`${title} by ${author}`);
// // 13.4

// // Get the size of bookMap, and log it to the console.

// console.log('size ', bookMap.size);
// // 13.5

// // Check if bookMap has the author key. and if so, log "The author of the book is known" to the console.

// bookMap.has('author') && console.log('book is known ');

// // map iteration
// const x = new Map([
//   ['q', 'what is the best programming language ?'],
//   [1, 'c'],
//   [2, 'java'],
//   [3, 'js'],
//   ['correct', 3],
//   [true, 'correct'],
//   [false, 'try again'],
// ]);
// console.log(x);
// console.log(x.get('q'));
// for (const [key, value] of x) {
//   if (typeof key === 'number') {
//     // console.log(x.get(1));
//     // console.log(x.get(2));
//     // console.log(x.get(3));
//     console.log(`Answer ${key} : ${value}`);
//   }
// }
// const answer = Number(prompt(' what is your answer ? '));
// console.log(answer);

// if (answer === x.get('correct')) {
//   console.log(x.get(true));
// } else {
//   console.log(x.get(false));
// }

// // way 2
// console.log(x.get(x.get('correct') === answer));

// // x.get( answer === 3 ? )

// // Maps: Iteration
// // 14.1

// // Convert the first book object from the books array into a Map, and assign it to a firstBookMap variable.
// console.log(' before convert obj to map ', books[0]);
// const convertObj = new Map(Object.entries(books[0]));
// console.log(' after convert obj to map ', books[0]);
// console.log('test ', convertObj);
// // 14.2

// // Use the for-of loop to iterate over firstBookMap, and log to the console keys that have numbers as values.

// for (const [key, value] of convertObj) {
//   // console.log(key, value);
//   if (typeof value == 'number') {
//     console.log('key :', key);
//   }
// }

// ///////////////////////////////////////
// // Coding Challenge #3

// /*
// Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).

// 1. Create an array 'events' of the different game events that happened (no duplicates)

// 2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
// 3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
// 4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
//       [FIRST HALF] 17: ⚽️ GOAL

// GOOD LUCK 😀
// */

// const gameEvents = new Map([
//   [17, '⚽️ GOAL'],
//   [36, '🔁 Substitution'],
//   [47, '⚽️ GOAL'],
//   [61, '🔁 Substitution'],
//   [64, '🔶 Yellow card'],
//   [69, '🔴 Red card'],
//   [70, '🔁 Substitution'],
//   [72, '🔁 Substitution'],
//   [76, '⚽️ GOAL'],
//   [80, '⚽️ GOAL'],
//   [92, '🔶 Yellow card'],
// ]);

// // 1
// const events = [...new Set(gameEvents.values())];
// console.log(events);
// // 2
// console.log(gameEvents.delete(64));
// console.log(gameEvents);
// // 3

// const average = 90 / gameEvents.size;
// console.log(`An event happened, on average, every ${average} minutes`);

// // 4
// for (const [key, value] of gameEvents) {
//   if (key <= 45) {
//     console.log(`[FIRST HALF] ${key}:  ${value}`);
//   } else {
//     console.log(`[SECOND HALF] ${key}:  ${value}`);
//   }
// }

// strings part-1
// const checkMiddkeSeat = function (seat) {
//   const middleSeat = seat.slice(-1);
//   const s =
//     middleSeat === 'B' || middleSeat === ' C'
//       ? ' u got the middle east'
//       : ' u got lucky';
//   console.log(s);
// };
// checkMiddkeSeat('11B');
// checkMiddkeSeat('23C');
// checkMiddkeSeat('3E');

// Working with Strings
// - Part 1

// const books = [
//   {
//     title: 'Algorithms',
//     author: ['Robert Sedgewick', 'Kevin Wayne'],
//     publisher: 'Addison-Wesley Professional',
//     publicationDate: '2011-03-24',
//     edition: 4,
//     keywords: [
//       'computer science',
//       'programming',
//       'algorithms',
//       'data structures',
//       'java',
//       'math',
//       'software',
//       'engineering',
//     ],
//     pages: 976,
//     format: 'hardcover',
//     ISBN: '9780321573513',
//     language: 'English',
//     programmingLanguage: 'Java',
//     onlineContent: true,
//     thirdParty: {
//       goodreads: {
//         rating: 4.41,
//         ratingsCount: 1733,
//         reviewsCount: 63,
//         fiveStarRatingCount: 976,
//         oneStarRatingCount: 13,
//       },
//     },
//     highlighted: true,
//   },
//   {
//     title: 'Structure and Interpretation of Computer Programs',
//     author: [
//       'Harold Abelson',
//       'Gerald Jay Sussman',
//       'Julie Sussman (Contributor)',
//     ],
//     publisher: 'The MIT Press',
//     publicationDate: '2022-04-12',
//     edition: 2,
//     keywords: [
//       'computer science',
//       'programming',
//       'javascript',
//       'software',
//       'engineering',
//     ],
//     pages: 640,
//     format: 'paperback',
//     ISBN: '9780262543231',
//     language: 'English',
//     programmingLanguage: 'JavaScript',
//     onlineContent: false,
//     thirdParty: {
//       goodreads: {
//         rating: 4.36,
//         ratingsCount: 14,
//         reviewsCount: 3,
//         fiveStarRatingCount: 8,
//         oneStarRatingCount: 0,
//       },
//     },
//     highlighted: true,
//   },
//   {
//     title: "Computer Systems: A Programmer's Perspective",
//     author: ['Randal E. Bryant', "David Richard O'Hallaron"],
//     publisher: 'Prentice Hall',
//     publicationDate: '2002-01-01',
//     edition: 1,
//     keywords: [
//       'computer science',
//       'computer systems',
//       'programming',
//       'software',
//       'C',
//       'engineering',
//     ],
//     pages: 978,
//     format: 'hardcover',
//     ISBN: '9780130340740',
//     language: 'English',
//     programmingLanguage: 'C',
//     onlineContent: false,
//     thirdParty: {
//       goodreads: {
//         rating: 4.44,
//         ratingsCount: 1010,
//         reviewsCount: 57,
//         fiveStarRatingCount: 638,
//         oneStarRatingCount: 16,
//       },
//     },
//     highlighted: true,
//   },
//   {
//     title: 'Operating System Concepts',
//     author: ['Abraham Silberschatz', 'Peter B. Galvin', 'Greg Gagne'],
//     publisher: 'John Wiley & Sons',
//     publicationDate: '2004-12-14',
//     edition: 10,
//     keywords: [
//       'computer science',
//       'operating systems',
//       'programming',
//       'software',
//       'C',
//       'Java',
//       'engineering',
//     ],
//     pages: 921,
//     format: 'hardcover',
//     ISBN: '9780471694663',
//     language: 'English',
//     programmingLanguage: 'C, Java',
//     onlineContent: false,
//     thirdParty: {
//       goodreads: {
//         rating: 3.9,
//         ratingsCount: 2131,
//         reviewsCount: 114,
//         fiveStarRatingCount: 728,
//         oneStarRatingCount: 65,
//       },
//     },
//   },
//   {
//     title: 'Engineering Mathematics',
//     author: ['K.A. Stroud', 'Dexter J. Booth'],
//     publisher: 'Palgrave',
//     publicationDate: '2007-01-01',
//     edition: 14,
//     keywords: ['mathematics', 'engineering'],
//     pages: 1288,
//     format: 'paperback',
//     ISBN: '9781403942463',
//     language: 'English',
//     programmingLanguage: null,
//     onlineContent: true,
//     thirdParty: {
//       goodreads: {
//         rating: 4.35,
//         ratingsCount: 370,
//         reviewsCount: 18,
//         fiveStarRatingCount: 211,
//         oneStarRatingCount: 6,
//       },
//     },
//     highlighted: true,
//   },
//   {
//     title: 'The Personal MBA: Master the Art of Business',
//     author: 'Josh Kaufman',
//     publisher: 'Portfolio',
//     publicationDate: '2010-12-30',
//     keywords: ['business'],
//     pages: 416,
//     format: 'hardcover',
//     ISBN: '9781591843528',
//     language: 'English',
//     thirdParty: {
//       goodreads: {
//         rating: 4.11,
//         ratingsCount: 40119,
//         reviewsCount: 1351,
//         fiveStarRatingCount: 18033,
//         oneStarRatingCount: 1090,
//       },
//     },
//   },
//   {
//     title: 'Crafting Interpreters',
//     author: 'Robert Nystrom',
//     publisher: 'Genever Benning',
//     publicationDate: '2021-07-28',
//     keywords: [
//       'computer science',
//       'compilers',
//       'engineering',
//       'interpreters',
//       'software',
//       'engineering',
//     ],
//     pages: 865,
//     format: 'paperback',
//     ISBN: '9780990582939',
//     language: 'English',
//     thirdParty: {
//       goodreads: {
//         rating: 4.7,
//         ratingsCount: 253,
//         reviewsCount: 23,
//         fiveStarRatingCount: 193,
//         oneStarRatingCount: 0,
//       },
//     },
//   },
//   {
//     title: 'Deep Work: Rules for Focused Success in a Distracted World',
//     author: 'Cal Newport',
//     publisher: 'Grand Central Publishing',
//     publicationDate: '2016-01-05',
//     edition: 1,
//     keywords: ['work', 'focus', 'personal development', 'business'],
//     pages: 296,
//     format: 'hardcover',
//     ISBN: '9781455586691',
//     language: 'English',
//     thirdParty: {
//       goodreads: {
//         rating: 4.19,
//         ratingsCount: 144584,
//         reviewsCount: 11598,
//         fiveStarRatingCount: 63405,
//         oneStarRatingCount: 1808,
//       },
//     },
//     highlighted: true,
//   },
// ];

// 15.1

// Take the ISBN property of the first book from the books array, and log to the console characters at index 6, 4, 9 and 8. Use bracket notation to access individual characters.

// console.log(books[0].ISBN[6]);
// console.log(books[0].ISBN[4]);
// console.log(books[0].ISBN[9]);
// console.log(books[0].ISBN[8]);
// 15.2

// Below is the quote variable that stores a string. Find the index of the word 'chess', and log it to the console.

// const quote =
//   'A computer once beat me at chess, but it was no match for me at kick boxing';

// console.log(quote.indexOf('chess'));
// 15.3

// Extract the word "boxing" from the same quote string, and log it to the console.
// console.log(quote.slice(-6));
// 15.4

// Some authors are noted as "(Contributor)", for example "Julie Sussman (Contributor)". Create a function called isContributor that takes an author's name as an argument, and returns either true (if he's a contributor) of false (if he's not a contributor). The string "(Contributor)" is always the last part of the author's name string.
// Example 1
// Example 2

// function isContributor(author) {
//   let position = author.lastIndexOf('Contributor');
//   let catchName = author.slice(position) === 'Contributor' ? true : false;
//   console.log(catchName);
// }
// isContributor('so so Contributor');
// isContributor('so so');

// another challenges with string
// 🔹 Title: "Is It a Greeting?"

// 🧠 Task:

// Write a function called isGreeting that takes a sentence as a string.
// Check if the word "hello" appears at the beginning of the sentence (ignore case).

// 🔧 Use:

//     slice()

//     toLowerCase()

// ✅ Example:

// isGreeting("Hello there!"); // true
// isGreeting("hello world"); // true
// isGreeting("Hey, hello!"); // false

// function isGreeting(a) {
//   let x = a.indexOf(' ');
//   console.log(x);
//   let s = a.slice(0, x);
//   let result = s.toLowerCase() === 'hello' ? true : false;
//   console.log(result);
// }
// isGreeting('Hello there!');
// isGreeting('hello world');
// isGreeting('Hey, hello!');

// 🔵 Complex Challenge:
// 🔹 Title: "Find Last Word"

// 🧠 Task:

// Write a function getLastWord(sentence) that returns the last word in a sentence.
// Words are separated by spaces, and the sentence ends with a word (no punctuation at the end).

// 🔧 Use:

//     lastIndexOf()

//     slice()

// ✅ Example:

// getLastWord("I love coding in JavaScript"); // "JavaScript"
// getLastWord("This is easy"); // "easy"

// 📌 Hint: Use lastIndexOf(' ') to find the last space, then slice() from there.
// function getLastWord(sentence) {
//   let positon = sentence.lastIndexOf(' ');
//   const c = sentence.slice(positon + 1);
//   console.log(c);
// }
// getLastWord('I love coding in JavaScript');
// getLastWord('This is easy');

// 🔍 Challenge: extractDomain

// 🧠 Goal:
// Create a function called extractDomain that takes an email address as a string, and returns just the domain name (the part after @).
// ✅ Examples:

// extractDomain('john.doe@gmail.com') // → "gmail.com"
// extractDomain('sara@outlook.com')   // → "outlook.com"
// extractDomain('admin@mywebsite.org') // → "mywebsite.org"

// 🧠 Hints:

//     Use .indexOf('@') to find where the domain starts.

//     Use .slice() to get everything after that position.

// 💡 Let me know if you'd like an extra twist or if you want to include validation (like checking if it contains @ or not).

// function extractDomain(at) {
//   let x = at.indexOf('@');
//   console.log(at.slice(x + 1));
// }
// extractDomain('john.doe@gmail.com'); // → "gmail.com"
// extractDomain('sara@outlook.com'); // → "outlook.com"
// extractDomain('admin@mywebsite.org'); // → "mywebsite.org"

// 🧠 Challenge: Extract Middle Word

// 📝 Task:
// Write a function getMiddleWord(sentence) that returns the middle word of a sentence. If the sentence has an even number of words, return the word just before the exact middle.
// 🔤 Examples:

// getMiddleWord("I love JavaScript") // ➞ "love"
// getMiddleWord("Learning JavaScript is fun") // ➞ "JavaScript"
// getMiddleWord("This is a simple sentence") // ➞ "a"
// getMiddleWord("Hi") // ➞ "Hi" (only one word)

// 💡 Hints:

//     Use indexOf, lastIndexOf, and slice to find word boundaries.

//     You can split the sentence into words using .split(' ') to count how many words, then use that to determine the middle one, but challenge yourself to do it without .split() if possible.

//     Handle edge cases like one-word sentences.

// function getMiddleWord(sentence) {}
// getMiddleWord('I love JavaScript'); // ➞ "love"
// getMiddleWord('Learning JavaScript is fun'); // ➞ "JavaScript"
// getMiddleWord('This is a simple sentence'); // ➞ "a"
// getMiddleWord('Hi'); // ➞ "Hi" (only one word)

// string part 2

// function takeEmail(e) {
//   console.log(e.toUpperCase());
// }
// takeEmail('sondos.amr4442gmail.com');

// ///////////////////////////////////////
//// Coding Challenge #4

// Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

// The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

// THIS TEST DATA (pasted to textarea)
// underscore_case
//  first_name
// Some_Variable
//   calculate_AGE
// delayed_departure

// SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
// underscoreCase      ✅
// firstName           ✅✅
// someVariable        ✅✅✅
// calculateAge        ✅✅✅✅
// delayedDeparture    ✅✅✅✅✅

// HINT 1: Remember which character defines a new line in the textarea 😉
// HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
// HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
// HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

// Afterwards, test with your own test data!

// GOOD LUCK 😀
// */

// revision about challenges in s-9

// challenge 1
/* 
We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

GOOD LUCK 😀
*/
// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// // 1
// const [players1, players2] = game.players;
// console.log(players1, players2);

// // 2
// const [gk, ...fieldPlayers] = players1;
// console.log(gk, fieldPlayers);

// //3
// const allPlayers = [...players1, ...players2];
// console.log(allPlayers);

// //4
// const players1Final = [...players1, 'Thiago', 'Coutinho'];
// console.log(players1Final);

// //5
// const { team1, x: draw, team2 } = game.odds;
// console.log(team1, draw, team2);

// //6
// function printGoals(...players) {
//   console.log(players);
//   console.log(' goals', players.length);
// }
// printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
// printGoals(...game.scored);

// //7
// team1 < team2 && console.log(game.team1);
// team2 < team1 && console.log(game.team2);

// // challenge 2
// // ///////////////////////////////////////
// // // Coding Challenge #2

// // /*
// // Let's continue with our football betting app!

// // 1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
// // 2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
// // 3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
// //       Odd of victory Bayern Munich: 1.33
// //       Odd of draw: 3.25
// //       Odd of victory Borrussia Dortmund: 6.5
// // Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

// // BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
// //       {
// //         Gnarby: 1,
// //         Hummels: 1,
// //         Lewandowski: 2
// //       }

// // GOOD LUCK 😀

// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// // 1
// for (const [indexScore, player] of game.scored.entries()) {
//   console.log(` goal ${indexScore + 1}: ${player}`);
// }

// //2
// let sum = 0;
// const scoredValue = Object.values(game.odds);
// for (const score of scoredValue) {
//   sum += score;
// }
// sum /= scoredValue.length;
// console.log(' avarage of scored', sum);

// //3
// for (const [key, value] of Object.entries(game.odds)) {
//   const result =
//     key === 'x'
//       ? `Odd of draw: ${value} `
//       : `Odd of victory ${game[key]}: ${value}`;
//   console.log(result);
// }

// // BONUS

// let scorers = {};
// for (const player of game.scored) {
//   if (scorers[player]) {
//     scorers[player] += 1;
//   } else {
//     scorers[player] = 1;
//   }
// }

// console.log(scorers);

// //challenge 3

// // ///////////////////////////////////////
// // // Coding Challenge #3

// // /*
// // Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).

// // 1. Create an array 'events' of the different game events that happened (no duplicates)
// // 2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
// // 3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
// // 4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
// //       [FIRST HALF] 17: ⚽️ GOAL

// // GOOD LUCK 😀

// const gameEvents = new Map([
//   [17, '⚽️ GOAL'],
//   [36, '🔁 Substitution'],
//   [47, '⚽️ GOAL'],
//   [61, '🔁 Substitution'],
//   [64, '🔶 Yellow card'],
//   [69, '🔴 Red card'],
//   [70, '🔁 Substitution'],
//   [72, '🔁 Substitution'],
//   [76, '⚽️ GOAL'],
//   [80, '⚽️ GOAL'],
//   [92, '🔶 Yellow card'],
// ]);

// //1
// const arr = new Set(gameEvents.values());
// console.log([...arr]);

// //2
// const deletYelloCard = gameEvents.delete(64);
// console.log(gameEvents);

// // 3
// const countEvents = gameEvents.size;
// const avarage = 90 / countEvents;
// console.log(`An event happened, on average, every ${avarage} minutes`);

// //4
// for (const [key, value] of gameEvents.entries()) {
//   key <= 45
//     ? console.log(`[FIRST HALF] ${key}: ${value}`)
//     : console.log(`[SECOND HALF] ${key}: ${value}`);
// }

// way 2
// for (const [key, value] of gameEvents.entries()) {
//    const half = key <= 45 ? "first" : "second";
//   console.log(`[${half}] ${key}: ${value}`);
// }

// challenge 4

// ///////////////////////////////////////
//// Coding Challenge #4

// Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

// The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

// THIS TEST DATA (pasted to textarea)
/*
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure
/*
// SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
// underscoreCase      ✅
// firstName           ✅✅
// someVariable        ✅✅✅
// calculateAge        ✅✅✅✅
// delayedDeparture    ✅✅✅✅✅

// HINT 1: Remember which character defines a new line in the textarea 😉 /n 
// HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b []
// HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
// HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

// Afterwards, test with your own test data!

// GOOD LUCK 😀
// */
document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));
const div = document.getElementById('output');

const btn = document.querySelector('button');
btn.textContent = 'convert';
btn.style.width = '100px';

let allText = '';
const text = document.querySelector('textarea');
btn.addEventListener('click', function () {
  const arrRo = text.value.split('\n');
  for (const [i, ele] of arrRo.entries()) {
    const [first, second] = ele.toLowerCase().trim().split('_');
    const output = first + second.replace(second[0], second[0].toUpperCase());
    const repeat = '✅'.repeat(i + 1);
    const final = output.padEnd(20) + repeat;
    console.log(final);
    allText += final + '\n';
  }
  div.innerText = allText;
});

// function convertToCamelCase(inputText) {
//   const lowerCased = inputText.toLowerCase().trim();
//   const words = lowerCased.split('_');
//   const [firstWord, secondWord] = words;
//   const capitalizedSecond = secondWord[0].toUpperCase() + secondWord.slice(1);
//   const camelCaseName = firstWord + capitalizedSecond;
//   console.log(camelCaseName);
//   // for (const i of camelCaseName) {
//   //   // console.log(i);
//   //   console.log(camelCaseName + '✅'.repeat(i + 1));
//   // }
// }

// convertToCamelCase('underscore_case');
// convertToCamelCase('first_name');
// convertToCamelCase('Some_Variablese');
// convertToCamelCase('calculate_AGE');
// convertToCamelCase('delayed_departure');
