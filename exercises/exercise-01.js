import { strict as assert } from 'assert';
import { employees } from '../data/employees.js';

// Exercise 1: Write a function that returns an array with the email addresses of all employees using a common loop:
export function getEmails(employees) {
    const emails = [];

    for (let i = 0; i < employees.length; i++) {
        const employee = employees[i];
        emails.push(employee.email);
    }
    return emails;
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
