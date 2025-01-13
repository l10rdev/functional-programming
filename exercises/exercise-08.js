import assert from 'node:assert';

// Exercise 8: Write a function that sums all numbers of an array.
function sum(numbers) {
    return numbers.reduce((total, number) => total + number, 0);
}

assert.equal(5, sum([-1, 0, 1, 2, 3]));
