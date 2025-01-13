import assert from 'node:assert';
import shoppingCartItems from '../data/shopping-cart.js';

// Exercise 9: Calculate the total value of the Shopping Cart.
function getShoppingCartTotal(products) {
    return products
        .map(item => item.quantity * item.unitPrice)
        .reduce((totalPrice, itemPrice) => totalPrice + itemPrice, 0);
}

assert.equal(1901.0, getShoppingCartTotal(shoppingCartItems));
