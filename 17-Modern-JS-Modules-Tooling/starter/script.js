// Importing Module
/*
import { addToCart, totalPrice as price, tq } from './shoppingCart.js';
console.log('Importing Module');

addToCart('eggs', 10);

console.log(price);
console.log(tq);
*/
/*
console.log('import');
import * as ShoppingCart from './shoppingCart.js';
*/
// ShoppingCart.addToCart('eggs', 30);

import add, { cart, totalPrice as price, tq } from './shoppingCart.js';
add('pizz', 4);
add('edds', 5);
add('apple', 20);
console.log(price);
console.log(tq);

console.log(cart);
// ShoppingCart.totalPrice;

// Top-Level await (ES2022)

// const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
// const data = await res.json();
// console.log(data);

const getLastPost = async function () {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const data = await res.json();
  console.log(data);
  return {
    title: data.at(-1).title,
    text: data.at(-1).body,
  };
};

const lastPost = await getLastPost();
console.log(lastPost);

// The Module Pattern

const shoppingCarts2 = (function () {
  const cart = [];
  const shippingCost = 10;
  const totalPrice = 257;
  const totalQuantity = 23;

  const addToCart = function (product, quantity) {
    cart.push({
      product,
      quantity,
    });
    console.log(`${quantity} ${product} added to cart`);
  };

  const orderStock = function (product, quantity) {
    console.log(`${quantity} ${product} ordered from supplier`);
  };

  return {
    addToCart,
    cart,
    totalPrice,
    totalQuantity,
    // shippingCost,
    // orderStock,
  };
})();

console.log(shoppingCarts2);
shoppingCarts2.addToCart('eggs', 14);
shoppingCarts2.addToCart('bread', 11);

console.log(shoppingCarts2.cart);
console.log(shoppingCarts2.totalPrice);
console.log(shoppingCarts2.totalQuantity);
// console.log(shoppingCarts2.shippingCost);
// shoppingCarts2.orderStock('suger', 1);

// CommonJS Modules

// EXPORT
// export.addToCart = function (product, quantity) {
//     cart.push({
//       product,
//       quantity,
//     });
//     console.log(`${quantity} ${product} added to cart`);
//   };

//   // IMPORT

//   const {addToCart} = require("./shoppingCart.js");

//  A Brief Introduction to the Command Line

// Introduction to NPM

import cloneDeep from 'lodash-es';
