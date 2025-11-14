// Importing Module
/*
import { addToCart, totalPrice as price, tq } from './shoppingCart.js';
console.log('Importing Module');

addToCart('eggs', 10);

console.log(price);
console.log(tq);
*/
console.log('import');
import * as ShoppingCart from './shoppingCart.js';

ShoppingCart.addToCart('eggs', 30);
// ShoppingCart.totalPrice;
