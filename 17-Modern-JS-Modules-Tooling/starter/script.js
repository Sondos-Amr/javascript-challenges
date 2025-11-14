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
