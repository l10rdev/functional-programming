import { strict as assert } from 'assert';
import { employees } from '../data/employees.js';

// Exercise 2: Write a function that returns an array with the email addresses of all employees using a higher order function.
function getEmails(employees) {
    return employees.map(employee => {
        return employee.email;
    });
}

assert.deepEqual(
  [
    'harvey@specter.us',
    'mike@ross.us',
    'travis@tanner.us',
    'robert@zane.us',
    'louis@litt.us',
    'donna@paulsen.us',
    'jessica@pearson.us',
    'katrina@bennett.us',
    'daniel@hardman.us',
    'sheila@sazs.us',
    'harold@jakowski.us',
    'jenny@griffith.us',
  ],
  getEmails(employees),
);
