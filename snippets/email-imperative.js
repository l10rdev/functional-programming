import { employees } from '../data/employees.js';

function getEmployeeEmails(employees) {
  const emails = [];

  for (let i = 0; i < employees.length; i++) {
    const employee = employees[i];
    emails.push(employee.email);
  }

  return emails;
}

console.log(getEmployeeEmails(employees));
