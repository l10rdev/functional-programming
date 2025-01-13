// Exercise 5: Write a function that doubles each Number of an array.

import { strict as assert } from 'assert';
import { employees } from '../data/employees.js';

function dobule(numbers) {
    return numbers.map(number => number * 2);
}

assert.deepEqual([-2, 0, 2, 4, 6], dobule([-1, 0, 1, 2, 3]));
