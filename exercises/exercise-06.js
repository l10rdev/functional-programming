// Exercise 6: Write a function that turn each day of an array to its weekday.

import { strict as assert } from 'assert';

function weekDays(dates) {}

assert.deepEqual(
  ['Friday', 'Saturday', 'Sunday'],
  weekDays([
    new Date('2019-10-11'),
    new Date('2019-10-12'),
    new Date('2019-10-13'),
  ]),
);
