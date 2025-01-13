import * as assert from 'node:assert';

// Exercise 7: Write a function that removes odd numbers of an array
function removeOddNumbers(numbers) {
    return numbers.filter(number => !(number%2));
}

assert.deepEqual(
  [0, 2, 4, 6, 8, 10],
  removeOddNumbers([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),
);
