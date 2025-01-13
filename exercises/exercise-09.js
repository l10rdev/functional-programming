import { Product } from '../models';
import assert from 'node:assert';
import shoppingCart from '../data/shopping-cart.js';

// Exercise 9: Calculate the total value of the Shopping Cart.
function getShoppingCartTotal(products) {}

assert.equal(1901.0, getShoppingCartTotal(shoppingCart));
